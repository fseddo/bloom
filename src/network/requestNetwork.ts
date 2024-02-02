import { getHostName } from "./getHostName";

type Props = {
  path: string;
};

export const requestNetwork = async ({ path }: Props) => {
  try {
    const response = await fetch(`${getHostName()}${path}`);

    const data = await response.json();

    return data;
  } catch (error) {}
};
