import { Router } from "express";
import { Flower } from "../db/models/Flower";
import { orderRouter } from "./orders";
import { flowerRouter } from "./flowers";

export const apiRouter = Router();

apiRouter.use("/flowers", flowerRouter);
apiRouter.use("/orders", orderRouter);

apiRouter.use((req, res, next) => {
  const error = new Error("Not Found");
  next(error);
});
