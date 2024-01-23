import Sequelize from "sequelize";
import { db } from "../db";

export const FlowerOrder = db.define("flowerorder", {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    validate: {
      min: 0,
    },
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 100000,
    },
  },
});
