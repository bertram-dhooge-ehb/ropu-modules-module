'use strict';
module.exports = (sequelize, DataTypes) => {
  const modules = sequelize.define('modules', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.NUMBER
    },
    name: DataTypes.STRING
  }, {});
  modules.associate = function(models) {    
    modules.belongsToMany(models.settings, { through: 'module_settings', foreignKey: 'module_id', otherKey: 'setting_id'})
  };
  return modules;
};