const { FlightService } = require("../Services/flight-service");

const flightService = new FlightService();

const create = async (req, res) => {
  console.log("Entered Flights Controller");
  console.log(req.body);
  try {
    const flightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
    };
    const createflight = await flightService.createflightService(
      flightRequestData
    );
    console.log(createflight);
    return res.status(201).json({
      data: createflight,
      sucess: true,
      message: "Created flight successfully from Controller",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      sucess: false,
      message: "Something worng in creating Flight from Controller",
      err: error,
    });
  }
};
const getAll = async (req, res) => {
  try {
    console.log(req.query);
    const response = await flightService.getAllFlightData(req.query);
    return res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully fetched the flights",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the flights",
      err: error,
    });
  }
};
const get = async (req, res) => {
  try {
    const response = await flightService.getFlight(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully fetched the flight",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the flight",
      err: error,
    });
  }
};
const update = async (req, res) => {
  try {
    const response = await flightService.updateFlight(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully updated the flight",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the flight",
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
  get,
  update,
};
