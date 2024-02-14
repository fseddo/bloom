import { convertPrice } from "../common/convertPrice";
import { Flower } from "../types/flower/Flower";
import { Button } from "../common/Button";
import { addToCart } from "../cart/addToCart";
import { useCallback } from "react";
import { cartAtom } from "../nav/Navbar";
import { useAtom } from "jotai";

type Props = {
  flower: Flower;
};

export const FlowerDescriptionArea = ({ flower }: Props) => {
  const [cart, setCart] = useAtom(cartAtom);

  const handleOnAddToCart = useCallback(() => {
    addToCart({ cart, setCart, flower });
  }, [cart, setCart, flower]);

  return (
    <div className="flex flex-col p-10 gap-14">
      <div className="flex flex-col gap-16">
        <div className="text-5xl font-bold font-playfair">{flower.name}</div>
        <div className="text-xl font-bold mr-28">{flower.description}</div>
      </div>
      <div className="pt-20">
        <Button
          label={`Add to Cart ${convertPrice(flower.price)}`}
          className="text-white font-normal flex px-32 justify-center py-2"
          handleOnClick={handleOnAddToCart}
        />
      </div>
    </div>
  );
};
