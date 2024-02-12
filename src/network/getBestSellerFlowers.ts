import { Flower } from "../types/flower/Flower";
import { getHostName } from "./getHostName";

export const getBestSellerFlowers = async () => {
  try {
    const response = await fetch(`${getHostName()}/flowers/bestSeller`);

    const data = await response.json();

    return data as Flower[];
  } catch (err) {}
};
