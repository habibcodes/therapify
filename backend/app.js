const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
// cors/---------
const cors = require("cors");

// import DB/---------
const db = require("./db");

// db Helper/---------
const dbHelpers = require("./db/helpers/dbHelpers")(db);

const app = express();

//YOUTUBE API -- START
require("dotenv").config();
// console.log(process.env.YOUTUBE_TOKEN);
const { google } = require("googleapis");

google
  .youtube("v3")
  .search.list({
    key: process.env.YOUTUBE_TOKEN,
    part: "snippet",
    q: "eminem",
  })
  .then((response) => {
    const { data } = response;
    data.items.forEach((item) => {
      console.log(`https://www.youtube.com/watch?v=` + item.id.videoId);
    });
  })
  .catch((err) => console.err);

//YOUTUBE API -- END

// Middleware/-----
// use cors before your routes are set up/-----
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Routers/-------
const patientsRouter = require("./routes/patients");
const practitionersRouter = require("./routes/practitioners");

app.use("/api/patients", patientsRouter(dbHelpers));
app.use("/api/practitioners", practitionersRouter(dbHelpers));

app.get("/api/authenticate");
app.post("/api/login");
app.post("/api/register");

module.exports = app;
