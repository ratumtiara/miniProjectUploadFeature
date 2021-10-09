'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GEN_UPLOAD_DOKUMENs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
        // unique : true
      },
      id_form_pembiayaan: {
        type: Sequelize.INTEGER
      },
      KTP: {
        type: Sequelize.STRING
      },
      KK: {
        type: Sequelize.STRING
      },
      SuratNikah: {
        type: Sequelize.STRING
      },
      NPWP: {
        type: Sequelize.STRING
      },
      SlipGaji: {
        type: Sequelize.STRING
      },
      KetKerja: {
        type: Sequelize.STRING
      },
      MutasiRek: {
        type: Sequelize.STRING
      },
      LapKeuangan: {
        type: Sequelize.STRING
      },
      SertifBangunan: {
        type: Sequelize.STRING
      },
      IMB: {
        type: Sequelize.STRING
      },
      PBB: {
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
    await queryInterface.dropTable('GEN_UPLOAD_DOKUMENs');
  }
};