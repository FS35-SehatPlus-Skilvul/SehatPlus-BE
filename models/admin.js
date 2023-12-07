'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    static associate(models) {
      Admin.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }

  Admin.init(
    {
      id_admin: {
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
        values: ["Laki-laki", "Perempuan"],
      },
      phone: DataTypes.STRING,
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
