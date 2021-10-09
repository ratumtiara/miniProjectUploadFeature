'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GEN_DATA_DIRI_PEMOHONs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      id_form_data_diri_keluarga: {
        type: Sequelize.INTEGER
      },
      nama_pemohon: {
        type: Sequelize.STRING
      },
      tempat_lahir_pemohon: {
        type: Sequelize.STRING
      },
      tanggal_lahir_pemohon: {
        type: Sequelize.DATE
      },
      nik_pemohon: {
        type: Sequelize.BIGINT
      },
      npwp_pemohon: {
        type: Sequelize.BIGINT
      },
      nama_ibu_kandung_pemohon: {
        type: Sequelize.STRING
      },
      status_kawin_pemohon: {
        type: Sequelize.STRING
      },
      jumlah_tanggungan_anak: {
        type: Sequelize.INTEGER
      },
      pendidikan_terakhir: {
        type: Sequelize.STRING
      },
      status_tempat_tinggal: {
        type: Sequelize.STRING
      },
      alamat_seuai_ktp: {
        type: Sequelize.STRING
      },
      rt: {
        type: Sequelize.INTEGER
      },
      rw: {
        type: Sequelize.INTEGER
      },
      provinsi: {
        type: Sequelize.STRING
      },
      kab_kota: {
        type: Sequelize.STRING
      },
      kecamatan: {
        type: Sequelize.STRING
      },
      kelurahan: {
        type: Sequelize.STRING
      },
      kode_pos: {
        type: Sequelize.INTEGER
      },
      alamat_saat_ini: {
        type: Sequelize.STRING
      },
      rt_saat_ini: {
        type: Sequelize.INTEGER
      },
      rw_saat_ini: {
        type: Sequelize.INTEGER
      },
      kelurahan_saat_ini: {
        type: Sequelize.STRING
      },
      kecamatan_saat_ini: {
        type: Sequelize.STRING
      },
      kab_kota_saat_ini: {
        type: Sequelize.STRING
      },
      provinsi_saat_ini: {
        type: Sequelize.STRING
      },
      kode_pos_saat_ini: {
        type: Sequelize.INTEGER
      },
      lama_tinggal: {
        type: Sequelize.INTEGER
      },
      alamat_surat_menyurat: {
        type: Sequelize.STRING
      },
      nomor_handphone1: {
        type: Sequelize.BIGINT
      },
      nomor_handphone2: {
        type: Sequelize.BIGINT
      },
      nomor_telp_rumah: {
        type: Sequelize.BIGINT
      },
      alamat_email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('GEN_DATA_DIRI_PEMOHONs');
  }
};