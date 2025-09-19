import crypto from 'crypto'
import assert from 'assert'

export class DataEncryption {
  private static algorithm = 'aes-256-gcm'
  private static key = crypto.scryptSync(process.env.ENCRYPTION_KEY || '', 'salt', 32)

  static encrypt(data: string): { encrypted: string; iv: string; tag: string } {
    const iv = crypto.randomBytes(16)
    const cipher = crypto.createCipheriv(this.algorithm, this.key, iv)
    
    let encrypted = cipher.update(data, 'utf8', 'hex')
    encrypted += cipher.final('hex')
    
    return {
      encrypted,
      iv: iv.toString('hex'),
      tag: cipher.getAuthTag().toString('hex')
    }
  }

  static decrypt(encryptedData: { encrypted: string; iv: string; tag: string }): string {
    const iv = Buffer.from(encryptedData.iv, 'hex')
    const decipher = crypto.createDecipheriv(this.algorithm, this.key, iv)
    decipher.setAuthTag(Buffer.from(encryptedData.tag, 'hex'))
    
    let decrypted = decipher.update(encryptedData.encrypted, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    
    return decrypted
  }
}
