const express = require("express");
const { PORT } = require("./config/Serverconfig");
var bodyParser = require("body-parser");
const { city } = require("./models/index");
const CityRepository = require("./repositories/city-repositories");
const CityService=require("./Services/index") ;
const startFlightService = async () => {
  const app = express();
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));
  // parse application/json
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.listen(PORT, () => {
    console.log(`Started Flight Services at port ${PORT}`);
    //console.log(city);
    let a = new CityRepository();
    //a.createCity({ name: "Viboy" });
    //a.deleteCity(6);
    //a.getCity(1);

    a.updateCity({ cityId: 1, data: "RK Binoly" });
  });
};
startFlightService();
