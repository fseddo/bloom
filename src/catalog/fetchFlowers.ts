import { Dispatch, SetStateAction } from "react";
import { Flower } from "../types/flower/Flower";

type Props = {
  setFlowers: Dispatch<SetStateAction<Flower[] | undefined>>;
};

export const fetchFlowers = async ({ setFlowers }: Props) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_HOST_NAME}/api/flowers`
    );
    if (!response.ok) {
      throw new Error("There was an issue with the network request.");
    }

    const data = await response.json();
    setFlowers(data);
  } catch (err) {}
};
