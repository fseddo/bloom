import { Router } from "express";
import { Flower } from "../db/models/Flower";
import { orderRouter } from "./orders";
import { flowerRouter } from "./flowers";

const router = Router();

router.use("/flowers", flowerRouter);
router.use("/orders", orderRouter);

router.use((req, res, next) => {
  const error = new Error("Not Found");
  next(error);
});
