'use strict';
module.exports = (sequelize, DataTypes) => {
  const settingtypes = sequelize.define('settingtypes', {
    typename: {
      primaryKey: true,
      type: DataTypes.STRING
    }
  }, {});
  settingtypes.associate = function(models) {
    // associations can be defined here
  };
  return settingtypes;
};