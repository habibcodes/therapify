const express = require("express");
const router = express.Router();

module.exports = (dbHelpers) => {
  console.log(dbHelpers);
  /* Access all practitioners */
  router.get("/", function (req, res, next) {
    dbHelpers
      .getAppointments()
      // hit this with an axios request at the get/route
      .then((result) => res.json(result))
      .catch(error => console.log(error));
      
  });
  // router.get("/:appointment_id", function (req, res, next) {
  //   const practitioners = { name: "Bob", email: "bob@email.com" };
  //   res.json(practitioners)
    
  // });

  router.post('/new', function (req, res, next) {
    dbHelpers
    .setAppointments(req.body.appointment)
    .then(res.status(200).json({}))
    .catch(error => console.log(error));
    
  })

  router.delete('/:appointment_id', function (req, res, next) {
    const { appointment_id } = req.params
    console.log('appointmentid from express ====', appointment_id)
    dbHelpers
    .deleteAppointments(appointment_id)
    .then(res.status(200).json({}))
    .catch(error => console.log(error));
  })

  return router;
};
