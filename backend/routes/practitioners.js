const express = require('express');
const practitioners = express.Router();

/* Access all practitioners */
practitioners.get('/', function (req, res, next) {
  const practioners = [
    { name: 'Dr. Alpha', email: 'alpha@doctor.com' },
    { name: 'Dr. Beta', email: 'beta@doctor.com' },
  ];
  res.json({});
});
practitioners.get('/:practitioner_id', function (req, res, next) {
  const practitioner = [{ name: 'Dr.Alpha', email: 'alpha@doctor.com' }];
  res.json({});
});

module.exports = practitioners;
