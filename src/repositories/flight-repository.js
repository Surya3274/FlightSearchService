const { Flight } = require("../models/index");

const { Op } = require("sequelize");
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
  async getFlight(data) {
    try {
      const flight = await Flight.findByPk(data);
      console.log(flight);
      return flight;
    } catch (error) {
      console.log("Error in get Flight repository" + error);
    }
  }
  async getAllFlights() {
    try {
      const flight = await Flight.findAll();
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async updateFlights(flightId, data) {
    try {
      await Flight.update(data, {
        where: {
          id: flightId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}
  
module.exports = { FlightRepository };
