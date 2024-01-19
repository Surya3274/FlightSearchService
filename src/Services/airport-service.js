const CrudService = require("./crud-service");
const { AirportRespository } = require("../repositories/index");

class AirportService extends CrudService {
  constructor() {
    const airportRespository = new AirportRespository();
    super(airportRespository);
  }
}

module.exports = AirportService;
