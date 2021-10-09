'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GEN_DATA_DIRI_PASANGANs', {
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
      nama_pasangan: {
        type: Sequelize.STRING
      },
      tempat_lahir_pasangan: {
        type: Sequelize.STRING
      },
      tanggal_lahir_pasangan: {
        type: Sequelize.DATE
      },
      nik_pasangan: {
        type: Sequelize.BIGINT
      },
      npwp_pasangan: {
        type: Sequelize.BIGINT
      },
      pekerjaan_pasangan: {
        type: Sequelize.STRING
      },
      no_telepon_pasangan: {
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
    await queryInterface.dropTable('GEN_DATA_DIRI_PASANGANs');
  }
};