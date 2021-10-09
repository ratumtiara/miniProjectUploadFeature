'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GEN_PEMBIAYAAN_PROPERTI extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GEN_PEMBIAYAAN_PROPERTI.belongsTo(models.GEN_USER, {foreignKey: 'UserId'});
    }
  };
  GEN_PEMBIAYAAN_PROPERTI.init({
    UserId: DataTypes.INTEGER,
    id_form_pengajuan: DataTypes.INTEGER,
    jenis_penjual: DataTypes.STRING,
    nama_penjual: DataTypes.STRING,
    nilai_spr: DataTypes.BIGINT,
    no_telepon_penjual: DataTypes.BIGINT,
    uang_muka: DataTypes.BIGINT,
    nama_proyek: DataTypes.STRING,
    kondisi_bangunan: DataTypes.STRING,
    alamat: DataTypes.STRING,
    rt: DataTypes.INTEGER,
    rw: DataTypes.INTEGER,
    provinsi: DataTypes.STRING,
    kab_kota: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kelurahan: DataTypes.STRING,
    kode_pos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GEN_PEMBIAYAAN_PROPERTI',
  });
  return GEN_PEMBIAYAAN_PROPERTI;
};