const express = require("express");
const router = express.Router();

module.exports = () => {
  router
    .get("/", function (req, res, next) {
      res.send(params);
    })
    .then((result) => res.json(result));

  return router;
};
