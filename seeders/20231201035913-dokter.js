'use strict';

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

    await queryInterface.bulkInsert("Dokter", [
      {
        nama: "dr. Rizky Anugrah, Sp. OG",
        email: "rizky@mail.com",
        gender: "Laki-Laki",
        phone: "085754612468",
        password: "123456",
        spesialisasi_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Dokter", null, {});
  }
};
