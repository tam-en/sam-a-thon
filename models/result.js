'use strict';
module.exports = (sequelize, DataTypes) => {
  const result = sequelize.define('result', {
    correct: DataTypes.INTEGER,
    incorrect: DataTypes.INTEGER,
    sum: DataTypes.INTEGER
  }, {});
  result.associate = function(models) {
    // associations can be defined here
  };
  return result;
};