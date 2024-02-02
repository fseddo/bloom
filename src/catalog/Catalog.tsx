import { Flower } from "../types/flower/Flower";
import { getFlowers } from "../network/getFlowers";
import { CatalogFlower } from "./CatalogFlower";
import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "../common/QueryKey";

export const Catalog = () => {
  const { data: flowers, isLoading } = useQuery({
    queryKey: [QueryKey.Flowers],
    queryFn: getFlowers,
  });

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
