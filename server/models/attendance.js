'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define('attendance', {
    meetingdId: DataTypes.INTEGER,
    memberId: DataTypes.INTEGER,
    attended: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        Attendance.belongsTo(models.meeting);
        Attendance.belongsTo(models.member)
      }
    }
  });
  return Attendance;
};
