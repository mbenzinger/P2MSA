'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Inventory extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
    }

    Inventory.init({
        company: {
            type: DataTypes.STRING,
            allowNull: false
        },
        model_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        style: {
            type: DataTypes.STRING,
            allowNull: false
          },
          size: {
            type: DataTypes.STRING,
            allowNull: false
          },
          sku: {
            type: DataTypes.STRING,
            allowNull: false
          },
    }, {
        sequelize,
        modelName: 'Inventory',
        tableName: 'inventory',
        timestamps: false
    })
        ;
    return Invnetory;
};