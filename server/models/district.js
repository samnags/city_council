'use strict';
module.exports = function(sequelize, DataTypes) {
  var District = sequelize.define('District', {
    districtId: DataTypes.INTEGER
  }, {
    // classMethods: {
    //   associate: function(models) {
    //     // associations can be defined here
    //   }
    // }
  });
  return District;
};
