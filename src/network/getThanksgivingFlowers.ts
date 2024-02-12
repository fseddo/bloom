import { Flower } from "../types/flower/Flower";
import { getHostName } from "./getHostName";

export const getThanksgivingFlowers = async () => {
  try {
    const response = await fetch(`${getHostName()}/flowers/thanksgiving`);

    const data = await response.json();

    return data as Flower[];
  } catch (err) {}
};
