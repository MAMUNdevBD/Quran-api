const { createCourse, courseList } = require("../controller/CourseController");

const multer = require("multer");
const { createLesson, lessonList } = require("../controller/LessonController");
const { createQuize, quizeList } = require("../controller/QuizeController");

module.exports = function (route) {
  // course
  route.post("/course/create", multer().none(), createCourse);
  route.get("/course/list", courseList);

  // course
  route.post("/lesson/create", multer().none(), createLesson);
  route.get("/lesson/list", lessonList);

  // Quize
  route.post("/quize/create", multer().none(), createQuize);
  route.get("/quize/list", quizeList);
};
