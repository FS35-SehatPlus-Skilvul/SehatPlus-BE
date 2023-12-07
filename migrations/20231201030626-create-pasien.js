'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pasien', {
      id_pasien: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id_user',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      },
      nama: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.ENUM,
        values: ["Laki-Laki", "Perempuan"],
      },
      phone: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Pasien');
  }
};