import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../../helpers/user/user-helpers";

const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const user = await createUser(req.body);
  res.json(user);
});

router.get("/:id", async (req, res) => {
  const user = await getUser(req.params.id);
  res.json(user);
});

router.patch("/:id", async (req, res) => {
  const user = await updateUser(req.params.id, req.body);
  res.json(user);
});

router.delete("/:id", async (req, res) => {
  const user = await deleteUser(req.params.id);
  res.json(user);
});

export default router;
