'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dokter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dokter.init({
    users_id: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    gender: DataTypes.ENUM("laki-laki", "perempuan"),
    spesialisasi: DataTypes.STRING,
    jadwal: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Dokter',
  });
  return Dokter;
};