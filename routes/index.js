const { grabData } = require("../controller/GrabController");

module.exports = function (app) {
  require("./chapter.js")(app);
  app.get("/v1/grab-data", grabData);

  app.get("/v1/chapters/:id/verses", async (req, res) => {
    const id = req.params.id;
    const lang = req.query.language;
    const limit = req.query.limit;
    const page = req.query.page;

    const verses = await axios.get(
      "https://api.quran.com/api/v3/chapters/" +
        id +
        "/verses?language=" +
        lang +
        "&limit=" +
        limit +
        "&page=" +
        page
    );

    res.send(verses.data);
  });
};
