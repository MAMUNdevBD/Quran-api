const { default: axios } = require("axios");
const express = require("express");
const app = express();
const port = 3030;

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
