const { Sequelize } = require("sequelize");

// console.log("DB_HOST:", process.env.DB_HOST);
// console.log("DB_USERNAME:", process.env.DB_USERNAME);
// console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
// console.log("DB_DATABASE:", process.env.DB_DATABASE);
// console.log("DB_PORT:", process.env.DB_PORT);

const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD.toString(),
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

module.exports = sequelize;
