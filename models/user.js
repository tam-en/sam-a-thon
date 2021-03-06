'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    verifyPassword: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    educationLevel: DataTypes.STRING,
    politicalView: DataTypes.STRING,
    mood: DataTypes.STRING,
    travel: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    // models.user.hasMany(models.choice)
  };
  return user;
};