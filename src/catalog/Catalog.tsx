import { useEffect, useState } from "react";
import { Flower } from "../types/flower/Flower";
import { getFlowers } from "../network/getFlowers";
import { CatalogFlower } from "./CatalogFlower";
import { atom, useAtom } from "jotai";

export const storeFlowersAtom = atom<Flower[] | undefined>(undefined);

export const Catalog = () => {
  const [storeFlowers, setStoreFlowers] = useAtom(storeFlowersAtom);

  useEffect(() => {
    let flowers
    if (storeFlowers == null) {
      const flowers = getFlowers();
    }
  }, []);

  return (
    <div className="bg-catalog flex flex-wrap justify-center items-center p-5 ">
      {flowers != null &&
        flowers.map((flower: Flower) => (
          <CatalogFlower key={flower.id} flower={flower} />
        ))}
      )
    </div>
  );
};
