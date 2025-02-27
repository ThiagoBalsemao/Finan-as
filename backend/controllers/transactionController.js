const Transaction = require('../models/transaction');

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addTransaction = async (req, res) => {
  const { description, amount, date, type } = req.body;

  try {
    const transaction = await Transaction.create({ description, amount, date, type });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTransaction = async (req, res) => {
  const { id } = req.params;

  try {
    await Transaction.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};