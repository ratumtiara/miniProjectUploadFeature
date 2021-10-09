'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GEN_PEMBIAYAAN_PROPERTIs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      id_form_pengajuan: {
        type: Sequelize.INTEGER
      },
      jenis_penjual: {
        type: Sequelize.STRING
      },
      nama_penjual: {
        type: Sequelize.STRING
      },
      nilai_spr: {
        type: Sequelize.BIGINT
      },
      no_telepon_penjual: {
        type: Sequelize.BIGINT
      },
      uang_muka: {
        type: Sequelize.BIGINT
      },
      nama_proyek: {
        type: Sequelize.STRING
      },
      kondisi_bangunan: {
        type: Sequelize.STRING
      },
      alamat: {
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
    await queryInterface.dropTable('GEN_PEMBIAYAAN_PROPERTIs');
  }
};