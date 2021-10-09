'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GEN_DATA_DIRI_KERABAT extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GEN_DATA_DIRI_KERABAT.belongsTo(models.GEN_USER, {foreignKey: 'UserId'});
    }
  };
  GEN_DATA_DIRI_KERABAT.init({
    UserId: DataTypes.INTEGER,
    id_form_data_diri_keluarga: DataTypes.INTEGER,
    nama_kerabat: DataTypes.STRING,
    alamat_kerabat: DataTypes.STRING,
    rt: DataTypes.INTEGER,
    rw: DataTypes.INTEGER,
    kelurahan: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kab_kota: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    kode_pos: DataTypes.INTEGER,
    no_telepon_rumah: DataTypes.BIGINT,
    no_handphone: DataTypes.BIGINT,
    hubungan_nasabah: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GEN_DATA_DIRI_KERABAT',
  });
  return GEN_DATA_DIRI_KERABAT;
};