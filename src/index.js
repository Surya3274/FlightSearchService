const express = require("express");
const { PORT } = require("./config/Serverconfig");
var bodyParser = require("body-parser");

const startFlightService = async () => {
  const app = express();
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));
  // parse application/json
  app.use(bodyParser.json());
  app.listen(PORT, () => {
    console.log(`Started Flight Services at port ${PORT}`);
  });
};
startFlightService();
