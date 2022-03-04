'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
    static associate(models) {
      // define association here
      // User.belongsTo(models.Channel, {
      //   foreignKey: 'user_id',
      //   as: 'channels'
      // });
    }
  }
  User.init({
    email: DataTypes.STRING,
    name:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};