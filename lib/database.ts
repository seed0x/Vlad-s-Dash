import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string
          created_at: string
        }
        Insert: {
          email: string
          full_name: string
        }
      }
      habits: {
        Row: {
          id: string
          user_id: string
          name: string
          target_frequency: number
          is_active: boolean
          created_at: string
        }
      }
    }
  }
}

export { supabase }
