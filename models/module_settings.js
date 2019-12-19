'use strict';
module.exports = (sequelize, DataTypes) => {
  const module_settings = sequelize.define('module_settings', {
    module_id: {
      primaryKey: true,
      type: DataTypes.NUMBER,
      references: 'modules',
      referencesKey: 'id'
    },
    setting_id: {
      primaryKey: true,
      type: DataTypes.NUMBER,
      references: 'settings',
      referencesKey: 'id'
    }
  }, {});
  module_settings.associate = function(models) {
  };
  return module_settings;
};