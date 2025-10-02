const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "restaurants", // database name
  "root", // username
  "", // password
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;
