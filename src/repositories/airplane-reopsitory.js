const { Airplane } = require("../models/index");
class AirplaneRepository {
  async getAirplane(id) {
    try {
      console.log("Airplane repository id" + id);
      const airplane = await Airplane.findByPk(id);
      await airplane.save();
      console.log(airplane);
      return airplane;
    } catch (error) {
      console.log("Error in AirplaneRepository layer getAirplane");
      console.log(error);
    }
  }
}
module.exports = { AirplaneRepository };
