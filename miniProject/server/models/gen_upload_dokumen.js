'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GEN_UPLOAD_DOKUMEN extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      GEN_UPLOAD_DOKUMEN.belongsTo(models.GEN_USER, {foreignKey: 'UserId'})
      // define association here
    }
  };
  GEN_UPLOAD_DOKUMEN.init({
    UserId: DataTypes.INTEGER,
    id_form_pembiayaan: DataTypes.INTEGER,
    KTP: DataTypes.STRING,
    KK: DataTypes.STRING,
    SuratNikah: DataTypes.STRING,
    NPWP: DataTypes.STRING,
    SlipGaji: DataTypes.STRING,
    KetKerja: DataTypes.STRING,
    MutasiRek: DataTypes.STRING,
    LapKeuangan: DataTypes.STRING,
    SertifBangunan: DataTypes.STRING,
    IMB: DataTypes.STRING,
    PBB: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GEN_UPLOAD_DOKUMEN',
  });
  return GEN_UPLOAD_DOKUMEN;
};