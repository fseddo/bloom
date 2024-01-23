import Sequelize from "sequelize";
import { db } from "../db";

export const Order = db.define("order", {
  isActiveCart: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
});
