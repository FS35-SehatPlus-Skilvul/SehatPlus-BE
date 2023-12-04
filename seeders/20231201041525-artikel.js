'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert ("Artikels", [
      {
        title: "Cara Mengatasi Flu",
        content: "Flu menjadi salah satu penyakit yang banyak menyerang dikala pergantian musim. Ada beberapa cara untuk mengatasi flu. Diantaranya, adalah meminum ramuan tradisional.",
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
  }
};

