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
     *
     */
    await queryInterface.bulkInsert(
      "Airplanes",
      [
        {
          modelnumber: "Wright Flyer",
          capacity: 300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelnumber: "Airbus A380",
          capacity: 380,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelnumber: "Boeing 747",
          capacity: 160,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelnumber: "Supermarine Spitfire",
          capacity: 46,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelnumber: "Cessna 172",
          capacity: 118,
          createdAt: new Date(),
          updatedAt: new Date(),
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
