// models/pasien.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pasien extends Model {
  }

  Pasien.init(
    {
      id_pasien: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nama: DataTypes.STRING,
      email: DataTypes.STRING,
      gender: {
        type: DataTypes.ENUM,
        values: ["Laki-Laki", "Perempuan"],
      },
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Pasien',
      tableName: 'Pasien', 
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    }
  );

  return Pasien;
};
