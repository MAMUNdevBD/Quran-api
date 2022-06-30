const { chapterList } = require("../controller/ChapterController");

module.exports = function (app) {
  app.get("/v1/chapters", chapterList);
};
