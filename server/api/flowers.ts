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

flowerRouter.get("/thanksgiving", async (req, res, next) => {
  try {
    const flowers = await Flower.findAll({
      where: {
        flowerType: "thanksgiving",
      },
    });
    res.json(flowers);
  } catch (error) {
    next(error);
  }
});

flowerRouter.get("/bestSeller", async (req, res, next) => {
  try {
    const flowers = await Flower.findAll({
      where: {
        flowerType: "bestSeller",
      },
    });
    res.json(flowers);
  } catch (error) {
    next(error);
  }
});

flowerRouter.get("/plant", async (req, res, next) => {
  try {
    const flowers = await Flower.findAll({
      where: {
        flowerType: "plant",
      },
    });
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
