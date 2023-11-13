const dotenv = require("dotenv");
dotenv.config();
console.log(process);
module.exports = {
  PORT: process.env.PORT,
};
