const { CityService } = require("../Services/city-service");

const cityService = new CityService();

const create = async (req, res) => {
  console.log("Entered City Controller");
  console.log(req.body);
  try {
    const createcity = await cityService.createCity(req.body);
    console.log(createcity);
    return res.status(201).json({
      data: createcity,
      sucess: true,
      message: "Created city successfully from Controller",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      sucess: false,
      message: "Something worng in creating city from Controller",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const deletecity = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: deletecity,
      sucess: true,
      message: "deleted city successfully from Controller",

      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      sucess: false,
      message: "Something worng in deleting city from Controller",
      err: error,
    });
  }
};
const get = async (req, res) => {
  console.log(req.params.id);
  try {
    const getcity = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: getcity,
      sucess: true,
      message: "fteched city successfully from Controller",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      sucess: false,
      message: "Something worng in getting city from Controller",
      err: error,
    });
  }
};
const update = async (req, res) => {
  try {
    console.log(req.body);
    const updatecity = await cityService.updateCity(req.body);
    return res.status(200).json({
      data: updatecity.data,
      sucess: true,
      message: "updated city successfully from Controller",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      sucess: false,
      message: "Something worng in updateing city from Controller",
      err: error,
    });
  }
};
const getAll = async (req, res) => {
  try {
    console.log(req.query);
    const getcities = await cityService.getAllCities(req.query);
    return res.status(200).json({
      data: getcities,
      sucess: true,
      message: "fteched All the city successfully from Controller",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      sucess: false,
      message: "Something worng in getting All cities from Controller",
      err: error,
    });
  }
};

module.exports = { create, get, destroy, update, getAll };
