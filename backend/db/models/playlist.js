'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Playlist.associate = function (models) {
    Playlist.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Playlist;
};