'use strict';
module.exports = (sequelize, DataTypes) => {
  const choices = sequelize.define('choices', {
    questionId: DataTypes.STRING,
    choice: DataTypes.STRING,
    type: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  choices.associate = function(models) {
    // associations can be defined here
  };
  return choices;
};