import axios from "axios"

const instance = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
})

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem("refresh_token")

      localStorage.removeItem("access_token")
      window.location.href = "/login"
    }
    return Promise.reject(error)
  },
)

instance.interceptors.request.use(config => {
  const token = localStorage.getItem("access_token")
  const organization = localStorage.getItem("organization")

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  if (organization) {
    config.headers.Organization = organization
  }

  return config
})

export default instance
