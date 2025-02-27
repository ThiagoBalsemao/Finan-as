const express = require('express');
const bodyParser = require('body-parser');
const transactionRoutes = require('./routes/transactionRoutes');
const sequelize = require('./database');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/api/transactions', transactionRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});