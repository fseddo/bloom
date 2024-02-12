import { useQuery } from "@tanstack/react-query";
import { HomeBanner } from "./HomeBanner";
import { QueryKey } from "../common/QueryKey";
import { getBestSellerFlowers } from "../network/getBestSellerFlowers";
import { getThanksgivingFlowers } from "../network/getThanksgivingFlowers";
import { getPlantFlowers } from "../network/getPlantFlowers";
import { useEffect, useState } from "react";
import { FlowerType } from "../types/flower/FlowerType";
import { Flower } from "../types/flower/Flower";
import { CatalogFlower } from "../catalog/CatalogFlower";

export const Home = () => {
  const [selectedFlowerType, setSelectedFlowerType] = useState<FlowerType>(
    FlowerType.BestSeller
  );

  const [suggestedFlowers, setSuggestedFlowers] = useState<
    Flower[] | undefined
  >(undefined);

  const { data: bestSellers } = useQuery({
    queryKey: [QueryKey.BestSeller],
    queryFn: getBestSellerFlowers,
  });

  const { data: thanksgivingFlowers } = useQuery({
    queryKey: [QueryKey.Thanksgiving],
    queryFn: getThanksgivingFlowers,
  });

  const { data: plants } = useQuery({
    queryKey: [QueryKey.Plant],
    queryFn: getPlantFlowers,
  });

  console.log({ bestSellers });

  useEffect(() => {
    if (
      bestSellers != null &&
      bestSellers.length > 2 &&
      selectedFlowerType === FlowerType.BestSeller
    ) {
      setSuggestedFlowers(bestSellers.slice(0, 3));
    }
    if (
      thanksgivingFlowers != null &&
      thanksgivingFlowers.length > 2 &&
      selectedFlowerType === FlowerType.Thanksgiving
    ) {
      setSuggestedFlowers(thanksgivingFlowers.slice(0, 3));
    }
    if (
      plants != null &&
      plants.length > 2 &&
      selectedFlowerType === FlowerType.Plant
    ) {
      setSuggestedFlowers(plants.slice(0, 3));
    }
  }, [
    bestSellers,
    selectedFlowerType,
    setSelectedFlowerType,
    thanksgivingFlowers,
    plants,
  ]);

  console.log({ plants });

  return (
    <div className="flex flex-col grow items-center ">
      <HomeBanner />
      {/*under banner */}
      <div className="pt-20 pb-16 flex justify-center flex-col items-center gap-6">
        <div className="text-6xl font-bold font-playfair">Fresh Picks</div>
        <div className="font-josefinSans text-lg">
          Where to start? We've got you covered. These area few of our favorite
          things!
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex font-playfair text-xl gap-20">
          <div
            className="cursor-pointer"
            onClick={() => setSelectedFlowerType(FlowerType.BestSeller)}
          >
            Best Sellers
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setSelectedFlowerType(FlowerType.Plant)}
          >
            Powerful Plants
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setSelectedFlowerType(FlowerType.Thanksgiving)}
          >
            Fall Follies
          </div>
        </div>

        <div className="flex px-40">
          {suggestedFlowers?.map((flower) => (
            <CatalogFlower flower={flower} />
          ))}
        </div>
      </div>
    </div>
  );
};
