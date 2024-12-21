export interface User {
  id: number
  unique_id: string
  username: string
  email: string
  password: string
  first_name: string
  last_name: string
  is_active: boolean
  is_superuser: boolean
  created_at: string
  updated_at: string
}
