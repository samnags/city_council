'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define('Attendance', {
    meetingdId: DataTypes.INTEGER,
    memberId: DataTypes.INTEGER,
    attended: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Attendance;
};

Attendance.belongsTo(Meeting);
Attendance.belongsTo(Member);
