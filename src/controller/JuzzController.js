const db = require("../database");

exports.juzzList = async function (req, res) {
  const juzs = await db("juzs");

  res.send({ juzs: juzs });
};
