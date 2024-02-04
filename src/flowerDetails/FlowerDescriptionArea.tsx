import { animated } from "@react-spring/web";
import { convertPrice } from "../common/convertPrice";
import { Flower } from "../types/flower/Flower";

type Props = {
  flower: Flower;
};

export const FlowerDescriptionArea = ({ flower }: Props) => {
  return (
    <div className="flex flex-col p-10 gap-14">
      <div className="flex flex-col gap-16">
        <div className="text-6xl font-bold font-playfair">{flower.name}</div>
        <div className="text-2xl font-bold mr-28">{flower.description}</div>
      </div>
      <div className="pt-20">
        <animated.button className="bg-black flex gap-3 text-white rounded-md px-48 py-2 font-bold text-2xl ">
          <div>Add To Cart</div>
          {`${convertPrice(flower.price)}`}
        </animated.button>
      </div>
    </div>
  );
};
