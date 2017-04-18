'use strict';
module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define('District', {
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
