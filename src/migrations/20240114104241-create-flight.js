"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Flight", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      flightnumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      airplaneid: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      departureAirportId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      arrivalAirportId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      arrivalTime: {
        type: Sequelize.DATE,
      },
      departureTime: {
        type: Sequelize.DATE,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      boardingDate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      totalseats: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Flight");
  },
};
