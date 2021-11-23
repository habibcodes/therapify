// server imports
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
// db imports
const db = require('./db');
// middleware imports
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
// helper imports //
const dbHelpers = require('./db/helpers/dbHelpers')(db);

// Middleware/-----
// use cors before your routes are set up/-----
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routers/-------
const patientsRouter = require('./routes/patients');
const practitionersRouter = require('./routes/practitioners');

app.use('/api/patients', patientsRouter(dbHelpers));
app.use('/api/practitioners', practitionersRouter(dbHelpers));

app.get('/api/authenticate');
app.post('/api/login');
app.post('/api/register');

// webRTC Section //----------------------------------------------------------------
// socket.io config
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});
app.use(cors());

io.on('connection', (socket) => {
  // local caller
  socket.emit('me', socket.id);
  // disconnect handler
  socket.on('disconnect', () => {
    socket.broadcast.emit('callEnded');
  });
  // calluser handler
  socket.on('callUser', ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit('callUser', { signal: signalData, from, name });
  });
  // answer call handler
  socket.on('answerCall', (data) => {
    io.to(data.to).emit('callAccepted', data.signal);
  });
});

module.exports = app;
