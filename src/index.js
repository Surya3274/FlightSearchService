const express = require("express");
const { PORT } = require("./config/Serverconfig");
const startFlightService = async () => {
  const app = express();

  app.listen(PORT, () => {
    console.log(`Started Flight Services at port ${PORT}`);
  });
};
startFlightService();
