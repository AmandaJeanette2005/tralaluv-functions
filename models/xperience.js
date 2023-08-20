'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Xperience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Xperience.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    stock_tickets: DataTypes.INTEGER,
    price: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Xperience',
    tableName: 'Xperience'
  });
  return Xperience;
};