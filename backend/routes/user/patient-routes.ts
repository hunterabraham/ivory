import {
  createPatient,
  deletePatient,
  getAllPatients,
  getPatient,
  getPatientsByOrganization,
  updatePatient,
} from "../../helpers/user/patient-helpers";
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const patient = await createPatient(req.body);
  res.json(patient);
});

router.get("/", async (req, res) => {
  const patients = await getAllPatients();
  res.json(patients);
});

router.get("/:id", async (req, res) => {
  const patient = await getPatient(req.params.id);
  res.json(patient);
});

router.patch("/:id", async (req, res) => {
  const patient = await updatePatient(req.params.id, req.body);
  res.json(patient);
});

router.delete("/:id", async (req, res) => {
  const patient = await deletePatient(req.params.id);
  res.json(patient);
});

router.get("/organization/:id", async (req, res) => {
  const patients = await getPatientsByOrganization(req.params.id);
  res.json(patients);
});

export default router;
