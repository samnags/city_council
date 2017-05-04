'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('members', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      district: {
        type: Sequelize.INTEGER,
        // onDelete: "CASCADE",
        // allowNull: false,
        // references: {
        //   model: 'districts',
        //   key: 'id',
        // },
      },
      party: {
        type: Sequelize.STRING,
        values: ['Democrat', 'Republican', 'Independent']
      },
      firstDay: {
        type: Sequelize.DATE,
        allowNull: false
      },
      lastDay: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null
      },
      inOffice: {
        type: Sequelize.BOOLEAN,
        allowNull: false
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('members');
  }
};
