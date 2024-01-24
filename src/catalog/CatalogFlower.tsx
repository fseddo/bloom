import { Flower } from "../types/flower/Flower";
import { convertPrice } from "../common/convertPrice";

type Props = {
  flower: Flower;
};

export const CatalogFlower = ({ flower }: Props) => {
  return (
    <div className="p-2">
      <div className="rounded-md max-w-[700px]">
        <img src={flower.imageUrl} />
      </div>
      <div className="flex flex-col justify-center items-center text-lg font-bold font-playfair p-1">
        <div>{flower.name}</div>
        <div className="font-light text-base">{convertPrice(flower.price)}</div>
      </div>
    </div>
  );
};
