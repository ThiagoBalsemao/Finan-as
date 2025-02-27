const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Transaction = sequelize.define('Transaction', {
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Transaction;