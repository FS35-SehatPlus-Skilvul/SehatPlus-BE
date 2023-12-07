// models/jadwal.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Jadwal extends Model {
    static associate(models) {
      Jadwal.belongsTo(models.Dokter, {
        foreignKey: 'dokter_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }

  Jadwal.init(
    {
      id_jadwal: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      dokter_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tanggal: DataTypes.DATE,
      jam_mulai: DataTypes.TIME,
      jam_selesai: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: 'Jadwal',
      tableName: 'Jadwal', 
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    }
  );

  return Jadwal;
};
