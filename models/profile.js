'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User)
    }

    
  }
  Profile.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name is required'
        },
        notNull: {
          msg: 'Name is required'
        },
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Address is required'
        },
        notNull: {
          msg: 'Address is required'
        },
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Age is required'
        },
        notNull: {
          msg: 'Age is required'
        },
      }
    },
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
    modelName: 'Profile',
  });
  return Profile;
};