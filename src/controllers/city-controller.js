const { response } = require("express");
const { CityService, CityService } = require("../Services/index");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const createcity = await cityService.createCity(req.body);
    return res.status(201).json({
      data: createcity,
      sucess: true,
      message: "Created city successfully from service",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      sucess: false,
      message: "Something worng in creating city from service",
      err: error,
    });
  }
};

const destroy = async (req,res) => {    
    try {
        const createcity = await cityService.deleteCity(req.param.id);
        return res.status(200).json({
          data: createcity,
          sucess: true,
          message: "deleted city successfully from service",
          err: {},
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          data: {},
          sucess: false,
          message: "Something worng in deleting city from service",
          err: error,
        });
      }
};
const get = async (req, res) => {
    try {
        const createcity = await cityService.deleteCity(req.param.id);
        return res.status(200).json({
            data: createcity,
            sucess: true,
            message: "fteched city successfully from service",
            err: {},
          });
  } catch (error) {
      console.log(error);
      return res.status(500).json({
        data: {},
        sucess: false,
        message: "Something worng in getting city from service",
        err: error,
      });
  }
};
const update = async (req, res) => {
    try {
        const createcity = await cityService.deleteCity(req.param.id,req.param.data);
        return res.status(200).json({
            data: createcity,
            sucess: true,
            message: "updated city successfully from service",
            err: {},
          });
  } catch (error) {
      console.log(error);
      return res.status(500).json({
        data: {},
        sucess: false,
        message: "Something worng in updateing city from service",
        err: error,
      });
  }
};

module.exports = { create, get, destroy, update };
