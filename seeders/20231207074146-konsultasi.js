'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Konsultasi', [
      {
        pasien_id: 1,
        dokter_id: 1, 
        jadwal_id: 1,
        status_pembayaran: 'Belum Bayar', 
        status_konsultasi: 'In Progress',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Konsultasi', null, {});
  }
};
