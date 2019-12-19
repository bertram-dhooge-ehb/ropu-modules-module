'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('options', {
      setting_id: {
        allowNull: false,
        references:{
          model: "settings",
          key: "id"
        },
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      option_name: {
        type: Sequelize.STRING,
        primaryKey: true
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
    return queryInterface.dropTable('options');
  }
};