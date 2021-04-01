'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define('Follow', {
    songUrl: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Follow.associate = function (models) {
    Follow.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Follow;
};