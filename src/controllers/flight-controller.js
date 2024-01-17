const { FlightService } = require("../Services/flight-service");

const flightService = new FlightService();

const create = async (req, res) => {
  console.log("Entered Flights Controller");
  console.log(req.body);
  try {
    const createflight = await flightService.createflightService(req.body);
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

module.exports = { create };
