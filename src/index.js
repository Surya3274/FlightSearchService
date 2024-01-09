const express = require("express");
const { PORT } = require("./config/Serverconfig");
var bodyParser = require("body-parser");
const { city } = require("./models/index");
const CityRepository = require("./repositories/city-repositories");
const CityService = require("./Services/index");
const Apiroutes = require("./routes/index");
const db = require("./models/index");
const { City, Airport } = require("./models/index");
const sequelize = require("sequelize");
const startFlightService = async () => {
  const app = express();
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));
  // parse application/json
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.listen(PORT, async () => {
    console.log(`Started Flight Services at port ${PORT}`);
    //console.log(city);
    // let a = new CityRepository();
    // a.createCity("Mumbai");
    // a.deleteCity(9);
    //a.getCity(1);
    if (process.env.SYNCDB) {
      // We need to add SYNCDB variable in ev file to make this if block work
      console.log("Syncing DB");
      db.sequelize.sync({ alter: true });
    }

    // const city = await City.findOne({
    //   where: {
    //     id: 2,
    //   },
    // });
    // console.log(city);
    // const airports = await city.getAirports();
    // console.log(airports);

    // app.use("/api", Apiroutes);

    //a.updateCity({ cityId: 1, data: "RK Binoly" });
  });
};
startFlightService();
