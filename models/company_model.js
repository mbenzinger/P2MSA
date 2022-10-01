'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company_Model extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate({Company}) {
    //   Model.hasOne(Company, {
    //     foreignKey: "company_id",
    //   })
    // }
  }
  
  Company_Model.init({
    company_id: {
     type: DataTypes.INTEGER,
     allowNull: false
    },
    modelName_id: {
      type: DataTypes.INTIGER,
      allowNull: false
    } }, {
    sequelize,
    modelName: 'Company-Model',
    tableName: 'company-model',
    timestamps: false
  })
    ;
  return Company_Model;
};