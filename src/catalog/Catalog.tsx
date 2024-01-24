import { useEffect, useState } from "react";
import { Flower } from "../types/flower/Flower";
import { fetchFlowers } from "./fetchFlowers";
import { CatalogFlower } from "./CatalogFlower";

export const Catalog = () => {
  const [flowers, setFlowers] = useState<Flower[] | undefined>(undefined);

  useEffect(() => {
    fetchFlowers({ setFlowers });
  }, []);

  return (
    <div className="bg-catalog flex flex-wrap justify-center items-center p-5 ">
      {flowers != null &&
        flowers.map((flower) => (
          <CatalogFlower key={flower.id} flower={flower} />
        ))}
      )
    </div>
  );
};
