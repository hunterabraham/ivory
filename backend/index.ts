import userRoutes from "./routes/user/user-routes";
import patientRoutes from "./routes/user/patient-routes";

const express = require("express");
const app = express();

app.use("/api", (req, res, next) => {
  req.url = "/api" + req.url; // Prepend '/api' to the request URL
  next();
});

app.use("/patients", patientRoutes);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 