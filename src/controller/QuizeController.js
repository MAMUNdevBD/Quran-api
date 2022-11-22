const db = require("../database");

exports.createQuize = async function (req, res) {
  await db("quizes").insert(req.body);
  res.send({
    success: true,
    message: "Quize added successfully",
  });
};

exports.quizeList = async function (req, res) {
  let courses = await db("quizes").where("lesson_id", req.query.lesson_id);
  res.send({
    success: true,
    message: "List of Quizes",
    data: courses,
  });
};
