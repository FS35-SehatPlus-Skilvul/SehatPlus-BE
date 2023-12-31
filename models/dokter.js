// models/dokter.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Dokter extends Model {
    static associate(models) {
      Dokter.belongsTo(models.Spesialisasi, {
        foreignKey: 'spesialisasi_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }

  Dokter.init(
    {
      id_dokter: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nama: DataTypes.STRING,
      email: DataTypes.STRING,
      gender: {
        type: DataTypes.ENUM,
        values: ["Laki-laki", "Perempuan"],
      },
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      spesialisasi_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Dokter',
      tableName: 'Dokter', 
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    }
  );

  return Dokter;
};
