// models/spesialisasi.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Spesialisasi extends Model {
    static associate(models) {
      // define association here
    }
  }

  Spesialisasi.init(
    {
      id_spesialisasi: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nama_spesialisasi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Spesialisasi',
      tableName: 'Spesialisasi',
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    }
  );

  return Spesialisasi;
};
