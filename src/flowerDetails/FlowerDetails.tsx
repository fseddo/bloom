import { atom, useAtom } from "jotai";
import { selectedFlowerAtom } from "../catalog/CatalogFlower";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "../common/QueryKey";
import { getFlower } from "../network/getFlower";
import { useEffect } from "react";
import { animated } from "@react-spring/web";
import { convertPrice } from "../common/convertPrice";

export const FlowerDetails = () => {
  const [selectedFlower, setSelectedFlower] = useAtom(selectedFlowerAtom);
  const { flowerId } = useParams<{ flowerId: string }>();

  const selectedImageUrlAtom = atom<string | undefined>(
    selectedFlower?.imageUrl
  );

  const [selectedImageUrl, setSelectedImageUrl] = useAtom(selectedImageUrlAtom);

  const { data: requestedFlower } = useQuery({
    queryKey: [QueryKey.SelectedFlower, flowerId],
    queryFn: () => getFlower({ id: flowerId }),
  });

  useEffect(() => {
    if (
      selectedFlower == null &&
      requestedFlower != null &&
      requestedFlower != selectedFlower
    ) {
      setSelectedFlower(requestedFlower);
      setSelectedImageUrl(requestedFlower.imageUrl);
    }
  }, [requestedFlower]);

  if (selectedFlower == null) return <></>;

  return (
    <div className="flex p-4 px-24 gap-4 h-[85vh]">
      {/*image options*/}
      <div className="flex flex-col gap-3 justify-center">
        <div className="w-60">
          <img src={selectedFlower.imageUrl} />
        </div>
        <div className="w-60">
          <img src={selectedFlower.imageUrlsecondary} />
        </div>
      </div>
      {/*main image*/}
      <div className="flex items-center">
        <img className="max-w-[850px]" src={selectedImageUrl} />
      </div>
      {/*description*/}
      <div className="flex flex-col p-10 justify-center gap-10">
        <div className="flex flex-col gap-10">
          <div className="text-6xl font-bold font-playfair">
            {selectedFlower.name}
          </div>
          <div className="text-2xl font-bold mr-28">
            {selectedFlower.description}
          </div>
        </div>
        <div className="pt-20">
          <animated.button className="bg-black flex gap-3 text-white rounded-md px-48 py-2 font-bold text-2xl ">
            <div>Add To Cart</div>
            {`${convertPrice(selectedFlower.price)}`}
          </animated.button>
        </div>
      </div>
    </div>
  );
};
