import { Router } from "express";
import { Flower } from "../db/models/Flower";
import { FlowerOrder } from "../db/models/FlowerOrder";

export const orderRouter = Router();

orderRouter.get("/", async (req, res, next) => {
  try {
    const orders = await FlowerOrder.findAll();
    res.json(orders);
  } catch (error) {
    next(error);
  }
});

orderRouter.get("/:orderId", async (req, res, next) => {
  try {
    const singleOrder = await FlowerOrder.findAll({
      where: {
        orderId: req.params.orderId,
      },
    });
    res.json(singleOrder);
  } catch (error) {
    next(error);
  }
});
