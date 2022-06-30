const { default: axios } = require("axios");
const db = require("../database");

exports.grabData = async function (req, res) {
  // grabChapters(req, res);
  res.send(await grabLanguages(req, res));
};

const grabLanguages = async function (req, res) {
  const langs = await axios.get(
    "https://api.quran.com/api/v4/resources/languages?language=ur"
  );
  return langs.data;
};

const grabChapters = async function (req, res) {
  const chapters = await axios.get(
    "https://api.quran.com/api/v4/chapters?language=bn"
  );

  const chs = chapters.data.chapters;

  let chsData = [];

  await Promise.all(
    chs.map(async (ch) => {
      const chapter = await axios
        .get("https://api.quran.com/api/v4/chapters/" + ch.id + "?language=en")
        .catch((err) => console.log(err));

      const data = chapter.data.chapter;
      chsData.push(chapter.data.chapter);
    })
  );

  const sortedChs = chsData.sort(function (a, b) {
    return a.id - b.id;
  });

  const filteredChs = sortedChs.map((ch) => {
    return {
      revelation_place: ch.revelation_place,
      revelation_order: ch.revelation_order,
      bismillah_pre: ch.bismillah_pre,
      name_complex: ch.name_complex,
      name_arabic: ch.name_arabic,
      verses_count: ch.verses_count,
      start_page: ch.pages[0],
      end_page: ch.pages[1],
    };
  });

  await db("chapters").insert(filteredChs);
  res.send(filteredChs);
};
