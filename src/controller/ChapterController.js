const db = require("../database");

exports.chapterList = async function (req, res) {
  const chapters = await db("chapters");
  chapters.forEach((chp) => {
    chp.pages = [chp.start_page, chp.end_page];
    delete chp.start_page;
    delete chp.end_page;
  });
  res.send({
    chapters: chapters,
  });
};
