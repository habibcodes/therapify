const express = require('express');
const patients = express.Router();

/* Access all patients */
patients.get('/', function (req, res, next) {
  const patients = [
    { name: 'Bob', email: 'bob@email.com' },
    { name: 'Bob2', email: 'bob2@email.com' },
  ];

  res.json({});
});
patients.get('/:patient_id', function (req, res, next) {
  const patient = [{ name: 'Bob', email: 'bob@email.com' }];
  res.json({});
});

module.exports = patients;
