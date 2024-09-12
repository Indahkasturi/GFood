'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.User)
      Product.hasMany(models.UserOrder)
    }

    static async infoProducts() {
      try {
        let countData = await Product.findAll({
          attributes:[
            [sequelize.fn('COUNT', sequelize.col('price'),'totalData')],
            [sequelize.fn('MAX', sequelize.col('price'),'expensive')],
            [sequelize.fn('MIN', sequelize.col('price'),'cheapest')],
          ],
        });
        return countData
      } catch (error) {
        throw error
      }
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    imageURL: DataTypes.STRING,
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'Users'
        },
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};