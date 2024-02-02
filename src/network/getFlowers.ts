import { Flower } from "../types/flower/Flower";
import { getHostName } from "./getHostName";

export const getFlowers = async () => {
  try {
    const response = await fetch(`${getHostName()}/flowers`);

    const data = await response.json();

    return data as Flower[];
  } catch (err) {}
};
