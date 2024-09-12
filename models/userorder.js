'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserOrder.belongsTo(models.User)
      UserOrder.belongsTo(models.Product)
    }
    
  }
  UserOrder.init({
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'Users'
        },
        key: 'id'
      }
    },
    ProductId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'Products'
        },
        key: 'id'
      }
    },
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserOrder',
  });
  return UserOrder;
};