'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  Transports.init({
    transport: DataTypes.STRING,
    type: DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'Transports',
    tableName: 'transports'
  });
  return Transports;
};