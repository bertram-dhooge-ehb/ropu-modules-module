'use strict';
module.exports = (sequelize, DataTypes) => {
  const settings = sequelize.define('settings', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.NUMBER
    },
    name: DataTypes.STRING,
    type: {
      type: DataTypes.STRING,
      references: 'settingtypes',
      referencesKey: 'typename'
    },
    value: DataTypes.STRING,
    description: DataTypes.STRING,
    endpoint: DataTypes.STRING
  }, {});
  settings.associate = function(models) {
    settings.belongsToMany(models.modules, { through: 'module_settings', foreignKey: 'setting_id', otherKey: 'module_id'});
    settings.hasMany(models.options, { foreignKey: 'setting_id' })
  };
  return settings;
};
