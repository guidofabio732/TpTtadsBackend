'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('maquina_piezas', {
      id_pieza: {
        type: Sequelize.INTEGER
      },
      id_maquina: {
        type: Sequelize.INTEGER
      },
      cant: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('maquina_piezas');
  }
};