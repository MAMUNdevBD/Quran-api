const { default: axios } = require("axios");

exports.getAudioByChapterAndReciter = async (req, res) => {
  const [chapterId, recitationId] = [
    req.params.chapterId,
    req.params.recitationId,
  ];

  const verses = req.query.verses;
  if (verses) {
    const { data } = await axios.get(
      "https://api.quran.com/api/v4/recitations/" +
        recitationId +
        "/by_chapter/" +
        chapterId
    );

    data.audio_files.map((audio) => {
      audio.url = process.env.APP_URL + "v1/audio/verse/" + audio.url;
    });

    res.send(data);
  } else {
    const { data } = await axios.get(
      "https://api.quran.com/api/v4/chapter_recitations/" +
        recitationId +
        "/" +
        chapterId
    );

    const url = data.audio_file.audio_url;
    const regex = /^h\w+:\/\/\w*.\w+.\w+\/(\S+)/g;
    const r = regex.exec(url)[1];

    data.audio_file.audio_url = process.env.APP_URL + "v1/" + r;
    res.send(data);
  }
};

exports.recitationList = async (req, res) => {
  const info = await axios.get(
    "https://api.quran.com/api/v4/resources/recitations?language=en"
  );
  res.send(info.data);
};
