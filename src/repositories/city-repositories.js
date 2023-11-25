const { city } = require("../models/index");
class CityRepository {
  async createCity({ name }) {
    try {
      const cityname = await city.create({ name });
      console.log(cityname);
    } catch (err) {
      console.log(err);
    }
  }
  async deleteCity(cityId ) {
    try {
      await city.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
  async getCity(cityId) {
    try {
      const cityname = await city.findByPk(cityId);
      console.log(cityname);
    } catch (err) {
      console.log(err);
    }
  }
  async updateCity({ cityId, data }) {
    try {
      console.log({ data });
      await city.update(
        { name: data },
        {
          where: {
            id: cityId,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = CityRepository;