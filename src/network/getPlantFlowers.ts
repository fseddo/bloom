import { Flower } from "../types/flower/Flower";
import { getHostName } from "./getHostName";

export const getPlantFlowers = async () => {
  try {
    const response = await fetch(`${getHostName()}/flowers/plant`);

    const data = await response.json();

    return data as Flower[];
  } catch (err) {}
};
