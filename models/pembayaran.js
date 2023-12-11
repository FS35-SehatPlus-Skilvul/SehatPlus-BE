// models/pembayaran.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pembayaran extends Model {
    static associate(models) {
      Pembayaran.belongsTo(models.Booking, {
        foreignKey: 'booking_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }

  Pembayaran.init(
    {
      id_pembayaran: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      booking_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      metode_pembayaran: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total_pembayaran: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Pembayaran',
      tableName: 'Pembayaran',
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    }
  );

  return Pembayaran;
};
