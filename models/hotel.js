'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Hotel.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    type: DataTypes.STRING,
    room_facilities: DataTypes.STRING,
    available_room: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Hotel',
    tableName: 'hotel'
  });
  return Hotel;
};