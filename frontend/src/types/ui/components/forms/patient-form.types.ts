import { Organization } from "@/types/organization.types"
import { User } from "@/types/user.types"

export interface PatientFormValues {
  name: string
  user?: User
  id?: number
  organization?: Organization
}
