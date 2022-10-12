const { default: axios } = require("axios");
const db = require("../database");

exports.chapterList = async function (req, res) {
  // const chapters = await db("chapters");
  // chapters.forEach((chp) => {
  //   chp.pages = [chp.start_page, chp.end_page];
  //   delete chp.start_page;
  //   delete chp.end_page;
  // });
  // res.send({
  //   chapters: chapters,
  // });

  const chapters = await axios.get(
    "https://api.quran.com/api/v4/chapters?language=en"
  );
  res.send(chapters.data);
};

exports.singleChapter = async function (req, res) {
  const chapter = await db("chapters").where("id", req.params.id).first();
  chapter.bismillah_pre = chapter.bismillah_pre == 0 ? false : true;
  res.send({
    chapter: chapter,
  });
};

exports.chapterInfo = async function (req, res) {
  const info = await axios.get(
    "https://api.quran.com/api/v4/chapters/" +
      req.params.id +
      "/info?language=en"
  );
  res.send(info.data);
};
