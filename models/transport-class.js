'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransportClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Transports,{
        foreignKey: 'transport_id',
        as: 'transport'
      })
    }
  }
  TransportClass.init({
    transport_id: DataTypes.INTEGER,
    class: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TransportClass',
    tableName: 'tr_class'
  });
  return TransportClass;
};