'use strict';
module.exports = (sequelize, DataTypes) => {
  const question = sequelize.define('question', {
    prompt: DataTypes.STRING
  }, {});
  question.associate = function(models) {
    // associations can be defined here
  };
  return question;
};