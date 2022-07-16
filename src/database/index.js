const environment = process.env.ENVIRONMENT || "development";
const config = require("../../knexfile.js")[environment];
var db = require("knex")(config);

module.exports = db;
