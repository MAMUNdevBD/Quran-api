const db = require("../database");

exports.createLesson = async function (req, res) {
  await db("lessons").insert({
    title: req.body.title,
    course_id: req.body.course_id,
    video_link: req.body.video_link,
    pdfs: JSON.stringify(req.body.pdfs),
    description: req.body.description,
  });
  res.send({
    success: true,
    message: "Lesson added successfully",
  });
};

exports.lessonList = async function (req, res) {
  let courses = await db("lessons").where("course_id", req.query.course_id);
  res.send({
    success: true,
    message: "List of Lessons",
    data: courses,
  });
};
