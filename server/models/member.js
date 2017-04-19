const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    party: {
      type: Sequelize.STRING,
      values: ['Democrat', 'Republican', 'Independent']
    },
    districtId: {
      type: Sequelize.INTEGER,
      onDelete: "CASCADE",
      allowNull: false,
      references: {
        model: 'Districts',
        key: 'id',
      },
    },
    firstDay: {
      type: Sequelize.DATE,
      allowNull: false
    },
    lastDay: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: null
    },
    inOffice: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: (models) => {
        Member.hasMany(models.Attendance)
      }
    }
  }
);
  return Member;
};
