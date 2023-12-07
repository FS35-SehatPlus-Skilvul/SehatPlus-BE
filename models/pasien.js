// models/pasien.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pasien extends Model {
    static associate(models) {
      Pasien.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }

  Pasien.init(
    {
      id_pasien: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nama: DataTypes.STRING,
      email: DataTypes.STRING,
      gender: {
        type: DataTypes.ENUM,
        values: ["Laki-Laki", "Perempuan"],
      },
      phone: DataTypes.STRING,
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
