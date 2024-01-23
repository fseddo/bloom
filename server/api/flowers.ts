import { Router } from "express";
import { Flower } from "../db/models/Flower";

export const flowerRouter = Router();

flowerRouter.get("/", async (req, res, next) => {
  try {
    const flowers = await Flower.findAll();
    res.json(flowers);
  } catch (error) {
    next(error);
  }
});

flowerRouter.get("/:flowerId", async (req, res, next) => {
  try {
    const flower = await Flower.findByPk(req.params.flowerId);
    res.json(flower);
  } catch (error) {
    next(error);
  }
});
