'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
  }

  Admin.init(
    {
      id_admin: {
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
    },
    {
      sequelize,
      modelName: 'Admin',
      tableName: 'Admin',
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    }
  );

  return Admin;
};
