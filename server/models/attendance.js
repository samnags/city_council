'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define('Attendance', {
    meetingdId: DataTypes.INTEGER,
    memberId: DataTypes.INTEGER,
    attended: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        Attendance.belongsTo(models.Meeting);
        Attendance.belongsTo(models.Member)
      }
    }
  });
  return Attendance;
};
