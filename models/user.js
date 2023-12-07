// models/user.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }

  User.init(
    {
      id_user: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM,
        values: ["admin", "dokter", "pasien"],
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'User', 
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    }
  );

  return User;
};
