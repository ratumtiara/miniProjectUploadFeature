'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GEN_PEMBIAYAAN_KONSUMSI_BERAGUN_PROPERTI extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  GEN_PEMBIAYAAN_KONSUMSI_BERAGUN_PROPERTI.init({
    UserId: DataTypes.INTEGER,
    id_form_pengajuan: DataTypes.INTEGER,
    jenis_penjual: DataTypes.STRING,
    nama_penjual: DataTypes.STRING,
    harga_penawaran: DataTypes.BIGINT,
    no_telepon_penjual: DataTypes.BIGINT,
    uang_muka: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'GEN_PEMBIAYAAN_KONSUMSI_BERAGUN_PROPERTI',
  });
  return GEN_PEMBIAYAAN_KONSUMSI_BERAGUN_PROPERTI;
};