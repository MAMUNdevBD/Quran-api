const { streamAudio } = require("../services/streamAudio");

exports.getVersesAudioByChapter = async (req, res) => {
  const [p1, p2, fileName] = [
    req.params.p1,
    req.params.p2,
    req.params.fileName,
  ];

  const input =
    "https://audio.qurancdn.com/" + p1 + "/" + p2 + "/mp3/" + fileName;

  streamAudio(input, res);
};

exports.getAudioByChapter = async (req, res) => {
  const [p1, p2, fileName] = [
    req.params.p1,
    req.params.p2,
    req.params.fileName,
  ];

  const input =
    "https://download.quranicaudio.com/qdc/" + p1 + "/" + p2 + "/" + fileName;

  streamAudio(input, res);
};

exports.getAudioFIle = async function (req, res) {
  const fileName = req.params.fileName;
  const input = "https://audio.qurancdn.com/wbw/" + fileName;

  streamAudio(input, res);
};
