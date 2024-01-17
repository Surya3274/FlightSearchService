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
      if (!compareTime(data.arrivalTime, data.departureTime)) {
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
}
module.exports = { FlightService };
