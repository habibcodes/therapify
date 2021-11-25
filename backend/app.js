// server imports
const express = require("express");
const app = express();
const debug = require("debug")("backend:server");
const path = require("path");
const server = require("http").createServer(app);
// db imports
const db = require("./db");
// middleware imports
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
// helper imports //
const dbHelpers = require("./db/helpers/dbHelpers")(db);

const port = normalizePort(process.env.PORT || "3001");
app.set("port", port);

// //YOUTUBE API -- START
// require("dotenv").config();
// // console.log(process.env.YOUTUBE_TOKEN);
// const { google } = require("googleapis");
// console.log(process.env.YOUTUBE_TOKEN);
// google
//   .youtube("v3")
//   .search.list({
//     key: process.env.YOUTUBE_TOKEN,
//     part: "snippet",
//     q: "eminem",
//   })
//   .then((response) => {
//     const { data } = response;
//     const arr = [];

//     data.items.forEach((item) => {
//       arr.push(`https://www.youtube.com/watch?v=` + item.id.videoId);
//       console.log(`https://www.youtube.com/watch?v=` + item.id.videoId);
//     });
//     console.log(arr)
//     return response.json;

//   })
//   .catch((err) => console.err);

// //YOUTUBE API -- END

// Middleware/-------------------------------------------------------------------
// use cors before your routes are set up
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Routers/------------------------------------------------------------------------
const patientsRouter = require("./routes/patients");
const practitionersRouter = require("./routes/practitioners");
const youtubeRouter = require("./routes/youtubevideo");
const appointmentsRouter = require("./routes/appointments");

app.use("/api/patients", patientsRouter(dbHelpers));
app.use("/api/practitioners", practitionersRouter(dbHelpers));
app.use("/api/youtube", youtubeRouter());
app.use("/api/appointments", appointmentsRouter(dbHelpers));

app.get("/api/appointments");
app.get("/api/authenticate");
app.post("/api/appointments");
app.post("/api/login");
app.post("/api/register");

// webRTC Section //----------------------------------------------------------------
// socket.io config
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  // local caller
  socket.emit("me", socket.id);
  // disconnect handler
  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded");
  });
  // calluser handler
  socket.on("callUser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("callUser", { signal: signalData, from, name });
  });
  // answer call handler
  socket.on("answerCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal);
  });
});

// Server and Port Configs //------------------------------------------------
// server handlers
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

// Normalize a port into a number, string, or false.
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

// Event listener for HTTP server "error" event.
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// Event listener for HTTP server "listening" event.
function onListening() {
  console.log(`Listening on Port: ${port}`);
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}
