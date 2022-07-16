const db = require("../database/index");
const fs = require("fs");

exports.populateDB = async (req, res) => {
  await this.populateLanguages();
  await this.populateTranslators();
  await this.populateJuzs();
  await this.populateChapters();
  res.send("done");
};

exports.populateJuzs = async () => {
  let juzs = fs.readFileSync(__dirname + "/../json-data/juzs.json");
  juzs = JSON.parse(juzs);
  juzs.forEach((juz) => {
    delete juz.id;
  });
  await db("juzs").insert(juzs);
};

exports.populateChapters = async () => {
  let chapters = fs.readFileSync(__dirname + "/../json-data/chapters.json");
  chapters = JSON.parse(chapters);
  chapters.forEach((c) => {
    delete c.id;
    delete c.translated_name;
    c.pages = JSON.stringify(c.pages);
  });
  await db("chapters").insert(chapters);
};

exports.populateTranslators = async () => {
  let translators = fs.readFileSync(
    __dirname + "/../json-data/translators.json"
  );
  translators = JSON.parse(translators);
  translators.forEach((t) => {
    delete t.id;
    delete t.translated_name;
    delete t.language_name;
    t.lang_code = "en";
  });
  await db("translators").insert(translators);
};

exports.populateLanguages = async () => {
  let langs = fs.readFileSync(__dirname + "/../json-data/languages.json");
  langs = JSON.parse(langs);
  langs.forEach((lang) => {
    delete lang.id;
    delete lang.translated_name;
  });
  return await db("languages").insert(langs);
};
