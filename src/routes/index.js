const { populateDB } = require("../controller/DbPopulateController.js");
const express = require("express");
const { grabData } = require("../controller/GrabController.js");
const router = express.Router();

module.exports = function (app) {
  require("./quran.js")(router);
  require("./course.js")(router);
  router.get("/populate-db", populateDB);
  router.get("/grab-data", grabData);
  app.use("/v1", router);
};
