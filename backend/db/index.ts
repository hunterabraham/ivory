const { Sequelize } = require("sequelize");

export const sequelize = new Sequelize(
  "postgres://ivory:ivory@localhost:5432/ivory_dev"
);
