'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShoeModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Company}) {
      ShoeModel.hasOne(Company, {
        foreignKey: "company_id",
      })
    }
  }
  
  ShoeModel.init({
    model_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    model_name: {
      type: DataTypes.STRING,
      allowNull: false
    } }, {
    sequelize,
    modelName: 'ShoeModel',
    tableName: 'shoemodel',
    timestamps: false
  })
    ;
  return ShoeModel;
};