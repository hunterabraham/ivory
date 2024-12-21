import { Organization } from "./organization.types"
import { User } from "./user.types"

export interface Patient {
  id?: number
  unique_id?: string
  created_at?: Date
  updated_at?: Date
  user: User
  organizations?: Organization[]
}
