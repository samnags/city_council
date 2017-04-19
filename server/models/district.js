'use strict';
module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define('district', {
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
