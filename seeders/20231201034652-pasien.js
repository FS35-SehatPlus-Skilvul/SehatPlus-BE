'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Pasien", [
      {
        user_id: 1,  // Sesuaikan dengan id yang sesuai
        nama: "Amalia Kartika",
        email: 'amaliakartika@mail.com',
        gender: "Perempuan",
        phone: "081212345678",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Menambahkan perintah bulkDelete untuk menghapus data yang telah diinsert
    await queryInterface.bulkDelete("Pasien", null, {});
  }
};
