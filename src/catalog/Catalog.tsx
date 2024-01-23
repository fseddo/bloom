import { useEffect, useState } from "react";

const enum FlowerColor {
  Yellow = "yellow",
  Purple = "purple",
  Pink = "pink",
  Red = "red",
  White = "white",
}

const enum FlowerType {
  Plant = "plant",
  Thanksgiving = "thanksgiving",
  BestSeller = "bestSeller",
}

interface Flower {
  id: number;
  name: string;
  flowerColor: FlowerColor;
  flowerType: FlowerType;
  price: number;
  imageUrl: string;
  imageUrlsecondary: string;
  description: string;
  stock: number;
  createdAt: string;
  updatedAt: string;
}

export const Catalog = () => {
  const [flowers, setFlowers] = useState<Flower[] | undefined>(undefined);
  const fetchFlowers = async () => {
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

  useEffect(() => {
    fetchFlowers();
  }, []);

  console.log({ flowers });
  return (
    <div>
      <div>Catalog</div>
      {flowers != null && (
        <div>
          {flowers.map((flower) => (
            <img src={flower.imageUrl} />
          ))}
        </div>
      )}
    </div>
  );
};
