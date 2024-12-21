import ApiService from "./api-service"

async function getPatients() {
  const response = await ApiService.get("/patients")
  return response.data
}

async function getOrganizationPatients() {
  const response = await ApiService.get("/patients/organization")
  console.log(response.data)
  return response.data
}

export default {
  getPatients,
  getOrganizationPatients,
}
