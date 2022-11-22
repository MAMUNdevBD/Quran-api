const db = require("../database");

exports.createCourse = async function (req, res) {
  console.log(req.body);
  await db("courses").insert(req.body);
  res.send({
    success: true,
    message: "course added successfully",
  });
};

exports.courseList = async function (req, res) {
  console.log(req.body);
  const courses = await db("courses").whereNotNull("title");
  res.send({
    success: true,
    message: "List of courses",
    data: courses,
  });
};
