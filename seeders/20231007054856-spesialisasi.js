'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Spesialisasi', [
      {
        nama_spesialisasi: 'Dokter Kandungan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_spesialisasi: 'Dokter Mata',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_spesialisasi: 'Dokter Anak',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Spesialisasi', null, {});
  }
};
