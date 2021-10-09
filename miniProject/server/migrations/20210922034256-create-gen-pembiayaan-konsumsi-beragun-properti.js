'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GEN_PEMBIAYAAN_KONSUMSI_BERAGUN_PROPERTIs', {
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
      harga_penawaran: {
        type: Sequelize.BIGINT
      },
      no_telepon_penjual: {
        type: Sequelize.BIGINT
      },
      uang_muka: {
        type: Sequelize.BIGINT
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
    await queryInterface.dropTable('GEN_PEMBIAYAAN_KONSUMSI_BERAGUN_PROPERTIs');
  }
};