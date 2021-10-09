'use strict';
const bcrypt = require('bcrypt')
const saltRounds = 10
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GEN_USER extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GEN_USER.hasOne(models.GEN_FASILITAS_PEMBIAYAAN, { foreignKey: 'UserId' });
      GEN_USER.hasOne(models.GEN_PEMBIAYAAN_PROPERTI, { foreignKey: 'UserId' });
      GEN_USER.hasOne(models.GEN_DATA_AGUNAN, { foreignKey: 'UserId' });
      GEN_USER.hasOne(models.GEN_DATA_DIRI_PEMOHON, { foreignKey: 'UserId' });
      GEN_USER.hasOne(models.GEN_DATA_PEKERJAAN_PEMOHON, { foreignKey: 'UserId' });
      GEN_USER.hasOne(models.GEN_DATA_PEMBIAYAAN_SAAT_INI, { foreignKey: 'UserId' });
      GEN_USER.hasOne(models.GEN_UPLOAD_DOKUMEN, { foreignKey: 'UserId' })
    }
  };
  GEN_USER.init({
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GEN_USER',
    hooks: {
      beforeCreate: async (data_user) => {
        data_user.password = await bcrypt.hash(data_user.password, saltRounds)
      },
      beforeUpdate: async (data_user) => {
        data_user.password = await bcrypt.hash(data_user.password, saltRounds)
      },
    },
  });
  return GEN_USER;
};