'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GEN_DATA_PEKERJAAN_PEMOHONs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      id_form_pekerjaan: {
        type: Sequelize.INTEGER
      },
      jenis_pekerjaan: {
        type: Sequelize.STRING
      },
      nama_perusahaan: {
        type: Sequelize.STRING
      },
      jabatan: {
        type: Sequelize.STRING
      },
      kategori_instansi: {
        type: Sequelize.STRING
      },
      lama_bekerja_tahun: {
        type: Sequelize.INTEGER
      },
      lama_bekerja_bulan: {
        type: Sequelize.INTEGER
      },
      jumlah_karyawan: {
        type: Sequelize.INTEGER
      },
      pendapatan: {
        type: Sequelize.BIGINT
      },
      status_pekerjaan: {
        type: Sequelize.STRING
      },
      pembayaran_gaji: {
        type: Sequelize.STRING
      },
      alamat_kantor: {
        type: Sequelize.STRING
      },
      bidang_usaha: {
        type: Sequelize.STRING
      },
      nomor_kantor: {
        type: Sequelize.BIGINT
      },
      nomor_hrd: {
        type: Sequelize.BIGINT
      },
      email_hrd: {
        type: Sequelize.STRING
      },
      nomor_atasan: {
        type: Sequelize.BIGINT
      },
      email_atasan: {
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
    await queryInterface.dropTable('GEN_DATA_PEKERJAAN_PEMOHONs');
  }
};