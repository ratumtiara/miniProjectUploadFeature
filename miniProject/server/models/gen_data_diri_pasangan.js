'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GEN_DATA_DIRI_PASANGAN extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  GEN_DATA_DIRI_PASANGAN.init({
    UserId: DataTypes.INTEGER,
    id_form_data_diri_keluarga: DataTypes.INTEGER,
    nama_pasangan: DataTypes.STRING,
    tempat_lahir_pasangan: DataTypes.STRING,
    tanggal_lahir_pasangan: DataTypes.DATE,
    nik_pasangan: DataTypes.BIGINT,
    npwp_pasangan: DataTypes.BIGINT,
    pekerjaan_pasangan: DataTypes.STRING,
    no_telepon_pasangan: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'GEN_DATA_DIRI_PASANGAN',
  });
  return GEN_DATA_DIRI_PASANGAN;
};