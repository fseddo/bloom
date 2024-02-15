import { Sequelize } from "sequelize";
import pkg from "../../package.json";

const dbName = pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");

const config = {
  logging: false,
};

export const db = new Sequelize({
  database: dbName,
  host: "127.0.0.1",
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
