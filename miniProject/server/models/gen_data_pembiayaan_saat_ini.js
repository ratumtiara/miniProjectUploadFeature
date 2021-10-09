'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GEN_DATA_PEMBIAYAAN_SAAT_INI extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GEN_DATA_PEMBIAYAAN_SAAT_INI.belongsTo(models.GEN_USER, {foreignKey: 'UserId'});
    }
  };
  GEN_DATA_PEMBIAYAAN_SAAT_INI.init({
    UserId: DataTypes.INTEGER,
    id_form_pembiayaan: DataTypes.INTEGER,
    pembiayaan_bank_lain: DataTypes.STRING,
    jumlah_pembiayaan: DataTypes.BIGINT,
    angsuran: DataTypes.BIGINT,
    jatuh_tempo: DataTypes.DATE,
    jenis_pembiayaan: DataTypes.STRING,
    nama_kreditur: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GEN_DATA_PEMBIAYAAN_SAAT_INI',
  });
  return GEN_DATA_PEMBIAYAAN_SAAT_INI;
};