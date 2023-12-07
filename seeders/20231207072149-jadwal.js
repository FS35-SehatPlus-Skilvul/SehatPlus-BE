'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Jadwal', [
      {
        dokter_id: 1,
        tanggal: new Date('2023-12-15'), 
        jam_mulai: '08:00:00', 
        jam_selesai: '10:00:00',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Jadwal', null, {});
  }
};
