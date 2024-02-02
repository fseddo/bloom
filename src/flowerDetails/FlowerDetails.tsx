import { useAtom } from "jotai";
import { selectedFlowerAtom } from "../catalog/CatalogFlower";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "../common/QueryKey";
import { getFlower } from "../network/getFlower";
import { useEffect } from "react";

export const FlowerDetails = () => {
  const [selectedFlower, setSelectedFlower] = useAtom(selectedFlowerAtom);
  const { flowerId } = useParams<{ flowerId: string }>();

  const { data: requestedFlower, isLoading } = useQuery({
    queryKey: [QueryKey.SelectedFlower, flowerId],
    queryFn: () => getFlower({ id: flowerId }),
  });

  useEffect(() => {
    if (selectedFlower == null && requestedFlower != null) {
      setSelectedFlower(requestedFlower);
    }
  }, [requestedFlower]);

  return <div>hello im {selectedFlower?.name}</div>;
};
