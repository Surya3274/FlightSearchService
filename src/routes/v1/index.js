const express = require("express");
const router = express.Router();
const cityController = require("../../controllers/city-controller");
const flightController = require("../../controllers/flight-controller");
const AirportController = require('../../controllers/airport-controller');

router.post("/city", cityController.create);
router.delete("/city/:id", cityController.destroy);
router.get("/city/:id", cityController.get);
router.patch("/city/", cityController.update);
router.get("/city", cityController.getAll);
//########################################
router.post("/flight", flightController.create);

router.get("/flight", flightController.getAll);
router.get("/flight/:id", flightController.get);
router.patch("/flight/:id",flightController.update);
//#########################################

router.post('/airports', AirportController.create);


module.exports = router;
