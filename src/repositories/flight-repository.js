const { Flight } = require("../models/index");


class FlightRepository {
  async createFlight(data) {
    try {
      const flight = await Flight.create(data);
      console.log(flight);
      return flight;
    } catch (error) {
      console.log("Error in Flight repository" + error);
    }
  }
}
module.exports = { FlightRepository };
