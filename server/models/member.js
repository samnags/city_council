const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('member', {
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
    district: {
      type: Sequelize.INTEGER,      
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
        Member.hasMany(models.attendance)
        // Member.belongsTo(models.district)
      }
    }
  }
);
  return Member;
};
