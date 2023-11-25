require("dotenv").config({ path: "SearchFlights/.env" });

module.exports = {
  PORT: process.env.PORT,
};

console.log(process.env.PORT);
