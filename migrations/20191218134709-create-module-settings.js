'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('module_settings', {
      module_id: {
        allowNull: false,
        references: {
          model: "modules",
          key: "id"
        },
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      setting_id: {
        allowNull: false,
        references: {
          model: "settings",
          key: "id"
        },
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('module_settings');
  }
};