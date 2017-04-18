'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    Member.create({
      firstName: 'Alice',
      lastName: 'Walters',
      party: 'Democrat',
      firstDay: Date.now(),
      inOffice: true
  })
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

// firstName: {
//   type: Sequelize.STRING,
//   allowNull: false
// },
// lastName: {
//   type: Sequelize.STRING,
//   allowNull: false
// },
// party: {
//   type: Sequelize.STRING,
//   values: ['Democrat', 'Republican', 'Independent']
// },
// firstDay: {
//   type: Sequelize.DATE,
//   allowNull: false
// },
// lastDay: {
//   type: Sequelize.DATE,
//   allowNull: true,
//   defaultValue: null
// },
// inOffice: {
//   type: Sequelize.BOOLEAN,
//   allowNull: false
// }
