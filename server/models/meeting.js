'use strict';
module.exports = function(sequelize, DataTypes) {
  var Meeting = sequelize.define('Meeting', {
    inSession: {
      values: ['yes', 'no', 'recess', 'cancelled', 'no quorom' ]
    }
  }, {
    // classMethods: {
    //   associate: function(models) {
    //     // associations can be defined here
    //   }
    // }
  });
  return Meeting;
};
