"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Airports",
      [
        {
          name: "Kempegowda",
          cityId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          address: "ROAD of Banglore",
        },
        {
          name: "Mysuru",
          cityId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          address: "ROAD of Banglore",
        },
        {
          name: "Mangaluru",
          cityId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          address: "ROAD of Banglore",
        },
        {
          name: "Juhu Airport",
          cityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          address: "ROAD of Mumbai",
        },
        {
          name: "Jalgaon Airport",
          cityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          address: "ROAD of Mumbai",
        },
        {
          name: "Aurangabad Airport",
          cityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          address: "ROAD of Mumbai",
        },
        {
          name: "Warangal airport",
          cityId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          address: "ROAD of Hyderabad",
        },
        {
          name: "Tuticorin Airport",
          cityId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
          address: "ROAD of Chennai",
        },

        {
          name: "Madurai Airport",
          cityId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
          address: "ROAD of Chennai",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
