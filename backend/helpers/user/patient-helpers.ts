import { Patient } from "../../db/tables/patient-table";

export async function createPatient(patient: Patient): Promise<Patient> {
  return Patient.create(patient);
}

export async function getPatient(id: string): Promise<Patient | null> {
  const patient = await Patient.findByPk(id);
  return patient;
}

export async function getAllPatients(): Promise<Patient[]> {
  const patients = await Patient.findAll();
  return patients;
}

export async function updatePatient(
  id: string,
  patient: Patient
): Promise<Patient | null> {
  await Patient.update(patient, { where: { id } });
  return Patient.findByPk(id);
}

export async function deletePatient(id: string): Promise<Patient | null> {
  const patient = await Patient.findByPk(id);
  await Patient.destroy({ where: { id } });
  return patient;
}

export async function getPatientsByOrganization(
  organizationId: string
): Promise<Patient[]> {
  const patients = await Patient.findAll({ where: { organizationId } });
  return patients;
}
