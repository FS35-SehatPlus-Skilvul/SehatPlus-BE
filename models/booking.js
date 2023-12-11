'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      Booking.belongsTo(models.Pasien, {
        foreignKey: 'pasien_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Booking.belongsTo(models.Dokter, {
        foreignKey: 'dokter_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
    }
  }

  Booking.init({
    id_booking: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    pasien_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dokter_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tanggal: {
      type: DataTypes.DATE
    },
    jam_mulai: {
      type: DataTypes.TIME
    },
    jam_selesai: {
      type: DataTypes.TIME
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Booking',
  });

  return Booking;
};
