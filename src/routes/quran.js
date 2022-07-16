const { chapterList } = require("../controller/ChapterController");
const { juzzList } = require("../controller/JuzzController");

module.exports = function (route) {
  route.get("/chapters", chapterList);
  route.get("/juzs", juzzList);
};
