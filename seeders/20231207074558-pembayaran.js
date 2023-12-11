'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Pembayaran', [
      {
        booking_id: 1,
        metode_pembayaran: 'Transfer Bank',
        total_pembayaran: 150.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Pembayaran', null, {});
  }
};
