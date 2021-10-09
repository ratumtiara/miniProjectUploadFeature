'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GEN_FASILITAS_PEMBIAYAAN extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GEN_FASILITAS_PEMBIAYAAN.belongsTo(models.GEN_USER, {foreignKey: 'UserId'});
    }
  };
  GEN_FASILITAS_PEMBIAYAAN.init({
    UserId: DataTypes.INTEGER,
    id_form_pengajuan: DataTypes.INTEGER,
    skema_pengajuan: DataTypes.STRING,
    peruntukan_pembiayaan: DataTypes.STRING,
    program: DataTypes.STRING,
    objek: DataTypes.STRING,
    akad: DataTypes.STRING,
    total_plafond: DataTypes.BIGINT,
    waktu_pembiayaan: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GEN_FASILITAS_PEMBIAYAAN',
  });
  return GEN_FASILITAS_PEMBIAYAAN;
};