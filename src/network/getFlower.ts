import { Flower } from "../types/flower/Flower";
import { requestNetwork } from "./requestNetwork";

type GetFlowerParams = {
  id: string | undefined;
};

export const getFlower = async ({ id }: GetFlowerParams) => {
  if (id == null) return undefined;
  try {
    const flower = await requestNetwork({ path: `/flowers/${id}` });

    return flower as Flower;
  } catch (err) {}
};
