'use strict';
module.exports = (sequelize, DataTypes) => {
  const answer = sequelize.define('answer', {
    userId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
    choiceId: DataTypes.INTEGER
  }, {});
  answer.associate = function(models) {
    // associations can be defined here
  };
  return answer;
};