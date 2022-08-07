const { default: axios } = require("axios");
const httpAdapter = require("axios/lib/adapters/http");

exports.streamAudio = (file, res) => {
  axios
    .get(file, {
      responseType: "stream",
      adapter: httpAdapter,
      "Content-Range": "bytes 16561-8065611",
    })
    .then((Response) => {
      const stream = Response.data;

      res.set("content-type", "audio/mp3");
      res.set("accept-ranges", "bytes");
      res.set("content-length", Response.headers["content-length"]);

      stream.on("data", (chunk) => {
        res.write(chunk);
      });

      stream.on("error", (err) => {
        res.sendStatus(404);
      });

      stream.on("end", () => {
        res.end();
      });
    })
    .catch((Err) => {
      console.log(Err.message);
    });
};
