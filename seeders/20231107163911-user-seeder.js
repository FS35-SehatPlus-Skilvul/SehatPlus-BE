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

    await queryInterface.bulkInsert("User", [
      {
        username: "Amalia",
        password: "123456",
        role: "pasien",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        username: "Rizky",
        password: "123456",
        role: "dokter",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        username: "Admin",
        password: "123456",
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("User", null, {});
  },
};
