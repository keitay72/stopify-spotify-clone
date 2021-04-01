'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    songUrl: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Like.associate = function (models) {
    Like.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Like;
};