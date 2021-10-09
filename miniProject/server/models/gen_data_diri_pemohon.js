'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GEN_DATA_DIRI_PEMOHON extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GEN_DATA_DIRI_PEMOHON.belongsTo(models.GEN_USER, {foreignKey: 'UserId'});
    }
  };
  GEN_DATA_DIRI_PEMOHON.init({
    UserId: DataTypes.INTEGER,
    id_form_data_diri_keluarga: DataTypes.INTEGER,
    nama_pemohon: DataTypes.STRING,
    tempat_lahir_pemohon: DataTypes.STRING,
    tanggal_lahir_pemohon: DataTypes.DATE,
    nik_pemohon: DataTypes.BIGINT,
    npwp_pemohon: DataTypes.BIGINT,
    nama_ibu_kandung_pemohon: DataTypes.STRING,
    status_kawin_pemohon: DataTypes.STRING,
    jumlah_tanggungan_anak: DataTypes.INTEGER,
    pendidikan_terakhir: DataTypes.STRING,
    status_tempat_tinggal: DataTypes.STRING,
    alamat_seuai_ktp: DataTypes.STRING,
    rt: DataTypes.INTEGER,
    rw: DataTypes.INTEGER,
    provinsi: DataTypes.STRING,
    kab_kota: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kelurahan: DataTypes.STRING,
    kode_pos: DataTypes.INTEGER,
    alamat_saat_ini: DataTypes.STRING,
    rt_saat_ini: DataTypes.INTEGER,
    rw_saat_ini: DataTypes.INTEGER,
    kelurahan_saat_ini: DataTypes.STRING,
    kecamatan_saat_ini: DataTypes.STRING,
    kab_kota_saat_ini: DataTypes.STRING,
    provinsi_saat_ini: DataTypes.STRING,
    kode_pos_saat_ini: DataTypes.INTEGER,
    lama_tinggal: DataTypes.INTEGER,
    alamat_surat_menyurat: DataTypes.STRING,
    nomor_handphone1: DataTypes.BIGINT,
    nomor_handphone2: DataTypes.BIGINT,
    nomor_telp_rumah: DataTypes.BIGINT,
    alamat_email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GEN_DATA_DIRI_PEMOHON',
  });
  return GEN_DATA_DIRI_PEMOHON;
};