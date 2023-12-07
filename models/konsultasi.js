// models/konsultasi.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Konsultasi extends Model {
    static associate(models) {
      Konsultasi.belongsTo(models.Pasien, {
        foreignKey: 'pasien_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      Konsultasi.belongsTo(models.Dokter, {
        foreignKey: 'dokter_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      Konsultasi.belongsTo(models.Jadwal, {
        foreignKey: 'jadwal_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }

  Konsultasi.init(
    {
      id_konsultasi: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      pasien_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dokter_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      jadwal_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status_pembayaran: {
        type: DataTypes.ENUM('Belum Bayar', 'Sudah Bayar'),
        allowNull: false,
      },
      status_konsultasi: {
        type: DataTypes.ENUM('In Progress', 'Completed', 'Canceled'),
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
      modelName: 'Konsultasi',
      tableName: 'Konsultasi',
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    }
  );

  return Konsultasi;
};
