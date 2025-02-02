'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Data.init({
    year: DataTypes.INTEGER,
    revenue: DataTypes.FLOAT,
    profit: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Data',
  });
  return Data;
};