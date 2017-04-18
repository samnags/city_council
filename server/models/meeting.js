const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Meeting = sequelize.define('Meeting', {
    inSession: {
      type: Sequelize.STRING,
      values: ['yes', 'no', 'recess', 'cancelled', 'no quorom']
    },
  }, {
    // classMethods: {
    //   associate: function(models) {
    //     Meeting.hasMany(models.Attendance)
    //   }
    // }
  });
  return Meeting;
};
