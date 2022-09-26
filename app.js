const express = require("express");
const app = express();
var cors = require("cors");
const port = 3030;

app.use(cors());

require("./src/routes")(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
