const { CityRepository } = require("../repositories/index.js");

class CityService {
  constructor() {
    this.CityRepository = new CityRepository();
  }

  async createCity(name) {
    console.log("Entered city services");
    console.log(name);
    try {
      const city = await this.CityRepository.createCity(name);
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
  async getAllCities(filter) {
    console.log("In Service layer");

    try {
      const fetchcity = await this.CityRepository.getAllCity({
        name: filter.name,
      });
      console.log(fetchcity);
      return fetchcity;
    } catch (err) {
      console("Problem in create get fuction from City Service");
    }
  }
  async updateCity(data) {
    try {
      const updatedcity = await this.CityRepository.updateCity(data);
      return updatedcity;
    } catch (err) {
      console("Problem in create update fuction from City Service");
    }
  }
}

module.exports = CityService;