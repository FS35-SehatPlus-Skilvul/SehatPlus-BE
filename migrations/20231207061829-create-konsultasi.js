'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Konsultasi', {
      id_konsultasi: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pasien_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Pasien',
          key: 'id_pasien',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      },
      dokter_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Dokter',
          key: 'id_dokter',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      },
      jadwal_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Jadwal',
          key: 'id_jadwal',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      },
      status_pembayaran: {
        type: Sequelize.ENUM('Belum Bayar', 'Sudah Bayar'),
        allowNull: false,
      },
      status_konsultasi: {
        type: Sequelize.ENUM('In Progress', 'Completed', 'Canceled'),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Konsultasi');
  }
};