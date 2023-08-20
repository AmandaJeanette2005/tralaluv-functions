'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class INV_hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  INV_hotel.init({
    hotel_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    no_hp: DataTypes.INTEGER,
    check_in: DataTypes.DATE,
    duration: DataTypes.INTEGER,
    check_out: DataTypes.DATE,
    guests: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'INV_hotel',
    tableName: 'inv_hotels'
  });
  return INV_hotel;
};