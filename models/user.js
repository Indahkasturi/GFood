'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs');
const { hash } = require('../helper/helper')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Profile)
      User.hasMany(models.Product)
      User.hasMany(models.UserOrder)
    }
    static async hash(pw) {
      let salt = await bcrypt.genSalt(10);
      let result = await bcrypt.hash(pw, salt);
      return result
    }

    static async compare(pw, hashed) {
      let result = await bcrypt.compare(pass, hashed);
      return result;
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Email is required'
        },
        notNull: {
          msg: 'Email is required'
        },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      
      validate: {
        notEmpty: {
          msg: 'Password is required'
        },
        notNull: {
          msg: 'Password is required'
        },
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'role is required'
        },
        notNull: {
          msg: 'role is required'
        },
      }
    },
  }, {
    hooks:{
      beforeValidate: async (instance, option) => {
        instance.password = await hash(instance.password);
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};