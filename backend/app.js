const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// cors/---------
const cors = require('cors');
// db Helper/---------
// const dbHelpers = require('./db/helpers/dbHelpers')(db);

// import DB/---------
const db = require('./db');

const app = express();

// Middleware/-----
// use cors before your routes are set up/-----
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routers/-------
const patientsRouter = require('./routes/patients');
const practitionersRouter = require('./routes/practitioners');

app.use('/api/patients', patientsRouter);
app.use('/api/practitioners', practitionersRouter);

app.get('/api/authenticate');
app.post('/api/login');
app.post('/api/register');

module.exports = app;
