'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GEN_DATA_PEMBIAYAAN_SAAT_INIs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      id_form_pembiayaan: {
        type: Sequelize.INTEGER
      },
      pembiayaan_bank_lain: {
        type: Sequelize.STRING
      },
      jumlah_pembiayaan: {
        type: Sequelize.BIGINT
      },
      angsuran: {
        type: Sequelize.BIGINT
      },
      jatuh_tempo: {
        type: Sequelize.DATE
      },
      jenis_pembiayaan: {
        type: Sequelize.STRING
      },
      nama_kreditur: {
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
    await queryInterface.dropTable('GEN_DATA_PEMBIAYAAN_SAAT_INIs');
  }
};