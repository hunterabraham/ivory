import { Organization } from "@/types/organization.types"
import ApiService from "./api-service"
import { User } from "@/types/user.types"

export async function fetchUser(name: string): Promise<{ data: string }> {
  const response = await ApiService.get("user", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  })
  return response.data
}

export async function createUser(user: Optional<User>) {
  const response = await ApiService.post("users", user)
  return response.data
}

export async function getUserOrganizations(): Promise<Organization[]> {
  const response = await ApiService.get("users/organization")

  return response.data.organizations
}

export default {
  fetchUser,
  createUser,
  getUserOrganizations,
}
