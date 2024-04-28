const Sequelize = require("sequelize");

const sequelize = new Sequelize("taskpane", "root", "3lucasrs!", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
