'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BusAttribute extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BusAttribute.init({
    rute: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BusAttribute',
    tableName: 'bus_attributes'
  });
  return BusAttribute;
};