const express = require("express");
const router = express.Router();

module.exports = (dbHelpers) => {
  /* Access all patients */
  router.get("/", function (req, res, next) {
    const patients = dbHelpers.getPatients();
    // hit this with an axios request at the get/route
    res.json(patients);
  });
  router.get("/:patient_id", function (req, res, next) {
    const patient = { name: "Bob", email: "bob@email.com" };
    res.json(patient);
  });
  return router;
};
