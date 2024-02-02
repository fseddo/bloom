import { useAtom } from "jotai";
import { selectedFlowerAtom } from "../catalog/CatalogFlower";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getFlower } from "../network/getFlower";

export const FlowerDetails = () => {
  const [selectedFlower, setSelectedFlower] = useAtom(selectedFlowerAtom);
  const { flowerId } = useParams<{ flowerId: string }>();

  useEffect(() => {
    if (selectedFlower == null && flowerId != null) {
      getFlower({ id: flowerId });
    }
  }, []);

  console.log({ selectedFlower });
  return <div>hello im {selectedFlower?.name}</div>;
};
