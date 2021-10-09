'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GEN_INFORMASI_AWAL extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  GEN_INFORMASI_AWAL.init({
    UserId: DataTypes.INTEGER,
    isNasabah: DataTypes.BOOLEAN,
    nomor_rekening: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GEN_INFORMASI_AWAL',
  });
  return GEN_INFORMASI_AWAL;
};