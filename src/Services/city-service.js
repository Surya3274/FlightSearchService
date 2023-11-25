const { CityRepository } = require("../repositories/index.js");

class cityService {
  constructor() {
    this.CityRepository = new CityRepository();
  }

  async createCity({ name }) {
    try {
      const city = await this.CityRepository.createCity({ name });
      return city;
    } catch (err) {
      console("Problem in create city fuction from City Service");
    }
  }
  async deleteCity(id) {
    try {
      const deletedcity = await this.CityRepository.deleteCity(id);
      return deletedcity;
    } catch (err) {
      console("Problem in create delete fuction from City Service");
    }
  }
  async getCity(id) {
    try {
      const fetchcity = await this.CityRepository.getCity(id);
      return fetchcity;
    } catch (err) {
      console("Problem in create get fuction from City Service");
    }
  }
  async updateCity({ id, data }) {
    try {
      const updatedcity = await this.CityRepository.updateCityCity({
        id,
        data,
      });
      return updatedcity;
    } catch (err) {
      console("Problem in create update fuction from City Service");
    }
  }
}
