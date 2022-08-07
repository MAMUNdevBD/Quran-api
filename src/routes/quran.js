const {
  verseByChapter,
  verseByPage,
  verseByJuz,
} = require("../controller/VerseController");
const {
  chapterList,
  singleChapter,
  chapterInfo,
} = require("../controller/ChapterController");
const { juzzList } = require("../controller/JuzzController");
const {
  getAudioFIle,
  getAudioByChapter,
  getVersesAudioByChapter,
} = require("../controller/AudioController");
const {
  recitationList,
  getAudioByChapterAndReciter,
} = require("../controller/RecitationController");

module.exports = function (route) {
  route.get("/chapters", chapterList);
  route.get("/chapters/:id", singleChapter);
  route.get("/chapters/:id/info", chapterInfo);

  // Verse
  route.get("/verses/by_chapter/:chapterId", verseByChapter);
  route.get("/verses/by_page/:pageNumber", verseByPage);
  route.get("/verses/by_juz/:juzNumber", verseByJuz);

  // Recitation

  route.get("/recitations", recitationList);
  route.get(
    "/recitation/chapter/:chapterId/by/:recitationId",
    getAudioByChapterAndReciter
  );

  // Audio
  route.get("/wbw/:fileName", getAudioFIle);
  route.get("/qdc/:p1/:p2/:fileName", getAudioByChapter);
  route.get("/audio/verse/:p1/:p2/mp3/:fileName", getVersesAudioByChapter);

  route.get("/juzs", juzzList);
};
