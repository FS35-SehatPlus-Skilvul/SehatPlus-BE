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

    await queryInterface.bulkInsert("Users", [
      {
        username: "Amalia",
        email: "amalia@mail.com",
        password: "123456",
        role: "pasien",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        username: "Kartika",
        email: "kartika@mail.com",
        password: "123456",
        role: "dokter",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        username: "Admin",
        email: "admin@mail.com",
        password: "123456",
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    ]);
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
