import Redis from 'ioredis'

export class CacheManager {
  private redis = new Redis(process.env.REDIS_URL)
  private memoryCache = new Map<string, { data: any; expires: number }>()

  async get<T>(key: string): Promise<T | null> {
    // L1: Memory cache
    const memoryItem = this.memoryCache.get(key)
    if (memoryItem && memoryItem.expires > Date.now()) {
      return memoryItem.data
    }

    // L2: Redis cache
    const redisValue = await this.redis.get(key)
    if (redisValue) {
      const parsed = JSON.parse(redisValue)
      this.memoryCache.set(key, { data: parsed, expires: Date.now() + 60000 })
      return parsed
    }

    return null
  }

  async set<T>(key: string, data: T, ttlSeconds: number = 300): Promise<void> {
    // Set in both caches
    this.memoryCache.set(key, { data, expires: Date.now() + (ttlSeconds * 1000) })
    await this.redis.setex(key, ttlSeconds, JSON.stringify(data))
  }
}

