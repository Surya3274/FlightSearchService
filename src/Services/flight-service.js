const { FlightRepository } = require("../repositories/flight-repository.js");
const {
  AirplaneRepository,
} = require("../repositories/airplane-reopsitory.js");
const { compareTime } = require("../utils/helper");
class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }
  async createflightService(data) {
    console.log("Entered flight Service");
    console.log(data);
    console.log(data.airplaneid);
    try {
      if (compareTime(data.arrivalTime, data.departureTime)) {
        console.log("Arrival time > departure Time");
        throw { error: "Arrival time > departure Time" };
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneid
      );
      console.log("Entered " + airplane);
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Error in Service layer createflightService");
    }
  }
  async getAllFlightData(data) {
    try {
        const flights = await this.flightRepository.getAllFlights(data);
        return flights;
    } catch (error) {
        console.log("Something went wrong at service layer");
        throw {error};
    }
}

async getFlight(flightId) {
    try {
        const flight = await this.flightRepository.getFlight(flightId);
        return flight;
    } catch (error) {
        console.log("Something went wrong at service layer");
        throw {error};
    }
}

async updateFlight(flightId, data) {
    try {
        const response = await this.flightRepository.updateFlights(flightId, data);
        return response;
    } catch (error) {
        console.log("Something went wrong at service layer");
        throw {error};
    }
}
}
module.exports = { FlightService };
