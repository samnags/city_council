'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define('attendance', {
    meetingId: DataTypes.INTEGER,
    memberId: DataTypes.INTEGER,
    attended: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        Attendance.belongsTo(models.meeting, {
          foreignKey: 'meetingId',
        }),
        Attendance.belongsTo(models.member, {
          foreignKey: 'memberId',
        })
      }
    }
  });
  return Attendance;
};


// classMethods: {
//   associate: function(models) {
//     Attendance.belongsTo(models.meeting, {
//       foreignKey: 'id',
//     }),
//     Attendance.belongsTo(models.member, {
//       foreignKey: 'id',
//     })
//   }
// }
