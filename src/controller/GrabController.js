const { default: axios } = require("axios");
const db = require("../database");
const { populateLanguages, populateJuzs } = require("./DbPopulateController");

exports.grabData = async function (req, res) {
  // await grabLanguages(req, res);
  // await grabJuzs();
  const a = await grabTranslators();
  // await populateLanguages(langs);
  // await grabChapters(req, res);
  res.send(a);
};

exports.grabJuzs = async function () {
  const juzs = await axios
    .get("https://api.quran.com/api/v4/juzs")
    .catch((err) => console.log(err));
  populateJuzs(juzs.data.juzs);
  return juzs.data;
};

const grabLanguages = async function (req, res) {
  const langs = await axios.get(
    "https://api.quran.com/api/v4/resources/languages?language=en"
  );

  const data = langs.data.languages;

  const filteredData = data.map((d) => {
    return {
      name: d.name,
      iso_code: d.iso_code,
      native_name: d.native_name,
      direction: d.direction,
      translations_count: d.translations_count,
    };
  });
  return data;
};

const grabTranslators = async function () {
  const translators = await axios.get(
    "https://api.quran.com/api/v4/resources/translations"
  );

  return translators.data;
};

const grabChapters = async function (req, res) {
  const chapters = await axios.get(
    "https://api.quran.com/api/v4/chapters?language=en"
  );

  const chs = chapters.data.chapters;

  let chsData = [];

  await Promise.all(
    chs.map(async (ch) => {
      const chapter = await axios
        .get("https://api.quran.com/api/v4/chapters/" + ch.id + "?language=en")
        .catch((err) => console.log(err));

      const data = chapter.data.chapter;
      chsData.push(data);
    })
  );

  const sortedChs = chsData.sort(function (a, b) {
    return a.id - b.id;
  });

  return sortedChs;
};
