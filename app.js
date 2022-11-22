const express = require("express");
const app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

const port = 3030;

app.use(cors());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

require("./src/routes")(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
