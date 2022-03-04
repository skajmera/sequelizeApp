'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Channel extends Model {
  
    static associate(models) {
      // define association here
      Channel.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'users'
      });

      // Channel.belongsToMany(models.User, {
      //   through: 'email',
      //   as: 'channel',
      //   foreignKey: 'title'
      // });
    }
  }
  Channel.init({
    title: DataTypes.STRING,
    user_id:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Channel',
  });
  return Channel;
};