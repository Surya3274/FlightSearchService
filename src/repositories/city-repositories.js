const { City } = require("../models/index");
const { Op } = require("sequelize");

class CityRepository {
  async createCity({ name }) {
    try {
      console.log("Entered city repostory");
      console.log(name);

      const cityname = await City.create({ name });
      console.log(cityname);
      return cityname;
    } catch (err) {
      console.log(err);
    }
  }
  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (err) {
      console.log(err);
    }
  }
  async getCity(cityId) {
    try {
      const cityname = await City.findByPk(cityId);
      console.log("City name is", cityname.name);
      return cityname.name;
    } catch (err) {
      console.log(err);
    }
  }
  async getAllCity(filter) {
    try {
      if (filter.name) {
        console.log(filter.name);
        const cityname = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cityname;
      }
    } catch (err) {
      console.log(err);
    }
  }
  async updateCity(newdata) {
    try {
      console.log({ newdata });
      // await city.update(
      //   { name: newdata.data},
      //   {
      //     where: {
      //       id: newdata.id,
      //     },
      //   }
      // );

      const city = await City.findByPk(newdata.id);
      city = newdata.data;
      await city.save();
      return city;
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = CityRepository;
