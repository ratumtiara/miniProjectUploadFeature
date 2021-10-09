'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GEN_DATA_AGUNANs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      id_form_agunan: {
        type: Sequelize.INTEGER
      },
      jenis_agunan: {
        type: Sequelize.STRING
      },
      luas_tanah: {
        type: Sequelize.INTEGER
      },
      luas_bangunan: {
        type: Sequelize.INTEGER
      },
      kondisi_bangunan: {
        type: Sequelize.STRING
      },
      status_kepemilikan: {
        type: Sequelize.STRING
      },
      status_agunan: {
        type: Sequelize.STRING
      },
      nama_sertifikat: {
        type: Sequelize.STRING
      },
      nomor_sertifikat: {
        type: Sequelize.STRING
      },
      masa_berlaku_sertifikat: {
        type: Sequelize.DATE
      },
      nomor_spr: {
        type: Sequelize.STRING
      },
      alamat_agunan: {
        type: Sequelize.STRING
      },
      rt: {
        type: Sequelize.INTEGER
      },
      rw: {
        type: Sequelize.INTEGER
      },
      provinsi_agunan: {
        type: Sequelize.STRING
      },
      kab_kota_agunan: {
        type: Sequelize.STRING
      },
      kecamatan_agunan: {
        type: Sequelize.STRING
      },
      kelurahan_agunan: {
        type: Sequelize.STRING
      },
      kode_pos_agunan: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('GEN_DATA_AGUNANs');
  }
};