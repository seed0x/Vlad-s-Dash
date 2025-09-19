import { supabase } from './database'

export class FERPACompliance {
  static classifyData(data: any): 'educational_record' | 'directory_info' | 'pii' | 'safe' {
    const piiFields = ['ssn', 'student_id', 'grades', 'disciplinary_records']
    const directoryFields = ['name', 'email', 'photo', 'graduation_date']
    
    const fields = Object.keys(data)
    
    if (fields.some(field => piiFields.includes(field))) {
      return 'educational_record'
    }
    
    if (fields.some(field => directoryFields.includes(field))) {
      return 'directory_info'
    }
    
    return 'safe'
  }

  static async auditDataAccess(userId: string, dataAccessed: string[], context: string) {
    await supabase.from('audit_logs').insert({
      user_id: userId,
      action: 'data_access',
      data_fields: dataAccessed,
      context,
      timestamp: new Date().toISOString()
    })
  }
}
