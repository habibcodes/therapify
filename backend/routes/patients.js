const express = require("express");
const patients = express.Router();

/* Access all patients */
patients.get("/", function (req, res, next) {
  const patients = [
    { name: "Bob", email: "bob@email.com" },
    { name: "Bob2", email: "bob2@email.com" },
  ];
  // hit this with an axios request at the get/route
  res.json(patients);
});
patients.get("/:patient_id", function (req, res, next) {
  const patient = { name: "Bob", email: "bob@email.com" };
  res.json(patient);
});

module.exports = patients;
