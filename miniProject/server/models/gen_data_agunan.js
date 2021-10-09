'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GEN_DATA_AGUNAN extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GEN_DATA_AGUNAN.belongsTo(models.GEN_USER, {foreignKey: 'UserId'});
    }
  };
  GEN_DATA_AGUNAN.init({
    UserId: DataTypes.INTEGER,
    id_form_agunan: DataTypes.INTEGER,
    jenis_agunan: DataTypes.STRING,
    luas_tanah: DataTypes.INTEGER,
    luas_bangunan: DataTypes.INTEGER,
    kondisi_bangunan: DataTypes.STRING,
    status_kepemilikan: DataTypes.STRING,
    status_agunan: DataTypes.STRING,
    nama_sertifikat: DataTypes.STRING,
    nomor_sertifikat: DataTypes.STRING,
    masa_berlaku_sertifikat: DataTypes.DATE,
    nomor_spr: DataTypes.STRING,
    alamat_agunan: DataTypes.STRING,
    rt: DataTypes.INTEGER,
    rw: DataTypes.INTEGER,
    provinsi_agunan: DataTypes.STRING,
    kab_kota_agunan: DataTypes.STRING,
    kecamatan_agunan: DataTypes.STRING,
    kelurahan_agunan: DataTypes.STRING,
    kode_pos_agunan: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GEN_DATA_AGUNAN',
  });
  return GEN_DATA_AGUNAN;
};