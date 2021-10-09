'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GEN_DATA_PEKERJAAN_PEMOHON extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GEN_DATA_PEKERJAAN_PEMOHON.belongsTo(models.GEN_USER, {foreignKey: 'UserId'});
    }
  };
  GEN_DATA_PEKERJAAN_PEMOHON.init({
    UserId: DataTypes.INTEGER,
    id_form_pekerjaan: DataTypes.INTEGER,
    jenis_pekerjaan: DataTypes.STRING,
    nama_perusahaan: DataTypes.STRING,
    jabatan: DataTypes.STRING,
    kategori_instansi: DataTypes.STRING,
    lama_bekerja_tahun: DataTypes.INTEGER,
    lama_bekerja_bulan: DataTypes.INTEGER,
    jumlah_karyawan: DataTypes.INTEGER,
    pendapatan: DataTypes.BIGINT,
    status_pekerjaan: DataTypes.STRING,
    pembayaran_gaji: DataTypes.STRING,
    alamat_kantor: DataTypes.STRING,
    bidang_usaha: DataTypes.STRING,
    nomor_kantor: DataTypes.BIGINT,
    nomor_hrd: DataTypes.BIGINT,
    email_hrd: DataTypes.STRING,
    nomor_atasan: DataTypes.BIGINT,
    email_atasan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GEN_DATA_PEKERJAAN_PEMOHON',
  });
  return GEN_DATA_PEKERJAAN_PEMOHON;
};