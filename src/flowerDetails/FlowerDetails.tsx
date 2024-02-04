import { atom, useAtom } from "jotai";
import { selectedFlowerAtom } from "../catalog/CatalogFlower";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "../common/QueryKey";
import { getFlower } from "../network/getFlower";
import { useEffect, useMemo } from "react";
import { FlowerImageSelectionArea } from "./FlowerImageSelectionArea";
import { FlowerDescriptionArea } from "./FlowerDescriptionArea";

export const selectedImageUrlAtom = atom<string | undefined>(undefined);

export const FlowerDetails = () => {
  const [selectedFlower, setSelectedFlower] = useAtom(selectedFlowerAtom);
  const [selectedImageUrl, setSelectedImageUrl] = useAtom(selectedImageUrlAtom);

  const { flowerId } = useParams<{ flowerId: string }>();

  const { data: requestedFlower } = useQuery({
    queryKey: [QueryKey.SelectedFlower, flowerId],
    queryFn: () => getFlower({ id: flowerId }),
  });

  const isNewFlower = useMemo(
    () => requestedFlower != null && selectedFlower != requestedFlower,
    [requestedFlower, selectedFlower]
  );

  useEffect(() => {
    if (isNewFlower) {
      setSelectedFlower(requestedFlower);
      setSelectedImageUrl(requestedFlower?.imageUrl);
    }
  }, [selectedFlower, requestedFlower, setSelectedFlower, setSelectedImageUrl]);

  if (selectedFlower == null) return <></>;
  //add could not find flower return to catalog message

  return (
    <div className="flex pt-28 px-24 gap-4 h-[85vh]">
      <FlowerImageSelectionArea
        flower={selectedFlower}
        selectedImageUrl={selectedImageUrl}
      />
      <FlowerDescriptionArea flower={selectedFlower} />
    </div>
  );
};
