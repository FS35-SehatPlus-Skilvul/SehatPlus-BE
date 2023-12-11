'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Booking', [
      {
        pasien_id: 1, 
        dokter_id: 1,
        tanggal: '2023-01-01',
        jam_mulai: '08:00:00',
        jam_selesai: '10:00:00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Booking', null, {});
  }
};
