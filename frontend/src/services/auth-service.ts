import { User } from "../types/user.types"
import ApiService from "./api-service"

async function authorizeUser({ code }: { code: string }): Promise<User> {
  const response = await ApiService.post("/auth/google", { code })
  localStorage.setItem("access_token", response.data.access_token)
  localStorage.setItem("refresh_token", response.data.refresh_token)
  return { ...response.data, access_token: undefined }
}

const AuthService = {
  authorizeUser,
}

export default AuthService
