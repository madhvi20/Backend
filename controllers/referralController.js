// backend/models/referralModel.js
const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Referral = sequelize.define("referral", {
    referrerName: {
      type: DataTypes.STRING
    },
    referrerEmail: {
      type: DataTypes.STRING
    },
    refereeName: {
      type: DataTypes.STRING
    },
    refereeEmail: {
      type: DataTypes.STRING
    }
  });

  return Referral;
};
