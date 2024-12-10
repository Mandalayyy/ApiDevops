const { Sequelize } = require("sequelize");
require("dotenv").config();

// Переконайтесь, що змінна середовища правильно завантажена
const databaseUrl = process.env.DATABASE_URL || 'mysql://root@127.0.0.1:3306/user_api';

const sequelize = new Sequelize(databaseUrl, {
  dialect: "mysql", // Змінено на mysql
  logging: false,
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;
