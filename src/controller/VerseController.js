const { default: axios } = require("axios");
require("dotenv").config();

exports.verseByJuz = async function (req, res) {
  const q = req.query;
  const [words, page, per_page] = [q.words, q.page, q.per_page];
  const versesQ = await axios.get(
    "https://api.quran.com/api/v4/verses/by_juz/" +
      req.params.juzNumber +
      "?language=en&words=" +
      words +
      "&page=" +
      page +
      "&per_page=" +
      per_page
  );

  const data = versesQ.data;

  data.verses.map((verse) => {
    verse.words.map((word) => {
      word.audio_url = process.env.APP_URL + "v1/" + word.audio_url;
    });
  });

  res.send(data);
};

exports.verseByPage = async function (req, res) {
  const q = req.query;
  const [words, page, per_page] = [q.words, q.page, q.per_page];
  const versesQ = await axios.get(
    "https://api.quran.com/api/v4/verses/by_page/" +
      req.params.pageNumber +
      "?language=en&words=" +
      words +
      "&page=" +
      page +
      "&per_page=" +
      per_page
  );

  const data = versesQ.data;

  data.verses.map((verse) => {
    verse.words.map((word) => {
      word.audio_url = process.env.APP_URL + "v1/" + word.audio_url;
    });
  });

  res.send(data);
};

exports.verseByChapter = async function (req, res) {
  const q = req.query;
  const [page, per_page, recitation, translations] = [
    q.page,
    q.per_page,
    q.recitation,
    q.translations,
  ];

  const versesQ = await axios.get(
    "http://api.quran.com/api/v3/chapters/" +
      req.params.chapterId +
      "/verses?recitation=" +
      recitation +
      "&translations=" +
      translations +
      "&language=en&text_type=words"
  );

  // const versesQ = await axios.get(
  //   "https://api.quran.com/api/v4/verses/by_chapter/" +
  //     req.params.chapterId +
  //     "?language=en&words=" +
  //     words +
  //     "&page=" +
  //     page +
  //     "&per_page=" +
  //     per_page
  // );

  const data = versesQ.data;

  data.verses.map((verse) => {
    verse.audio.url = process.env.APP_URL + "v1/audio/" + verse.audio.url;
    verse.words.map((word) => {
      word.audio_url = process.env.APP_URL + "v1/" + word.audio.url;
    });
  });

  res.send(data);
};
