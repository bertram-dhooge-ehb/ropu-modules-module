'use strict';
module.exports = (sequelize, DataTypes) => {
  const options = sequelize.define('options', {
    setting_id: {
      primaryKey: true,
      references: 'settings',
      referencesKey: 'id',
      type: DataTypes.INTEGER
    },
    option_name: {
      primaryKey: true,
      type: DataTypes.STRING
    }
  }, {});
  options.associate = function(models) {
    // associations can be defined here
  };
  return options;
};