import { Flower } from "../types/flower/Flower";
import { convertPrice } from "../common/convertPrice";
import { useCallback, useRef } from "react";
import { useGesture } from "@use-gesture/react";
import { animated, to, useSpring } from "@react-spring/web";
import { Link } from "react-router-dom";
import { atom, useAtom } from "jotai";
import { getPath } from "../common/getPath";
import { AppRoute } from "../common/AppRoute";
import { Button } from "../common/Button";
import { cartAtom } from "../nav/Navbar";
import { addToCart } from "../cart/addToCart";

type Props = {
  flower: Flower;
  isHomeView?: boolean;
};

export const selectedFlowerAtom = atom<Flower | undefined>(undefined);

export const CatalogFlower = ({ flower, isHomeView = false }: Props) => {
  const [, setSelectedFlower] = useAtom(selectedFlowerAtom);
  const [cart, setCart] = useAtom(cartAtom);

  const target = useRef(null);

  const [{ zoom, scale }, api] = useSpring(() => ({
    scale: 1,
    zoom: 0,
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  useGesture(
    {
      onMove: () =>
        api.start({
          scale: 1.1,
        }),
      onHover: ({ hovering }) => !hovering && api.start({ scale: 1 }),
    },
    { target, eventOptions: { passive: false } }
  );

  const handleOnClickFlower = useCallback(() => {
    setSelectedFlower(flower);
  }, [setSelectedFlower, flower]);

  const handleOnAddToCart = useCallback(() => {
    addToCart({ cart, setCart, flower });
  }, [cart, setCart, flower]);

  return (
    <div className="p-2">
      <Link
        to={getPath(AppRoute.FlowerDetails, { flowerId: flower.id.toString() })}
      >
        <div
          className="z-10 overflow-hidden max-w-[700px] max-h-[500px] cursor-pointer"
          onClick={handleOnClickFlower}
        >
          <animated.div
            ref={target}
            style={{
              scale: to([scale, zoom], (s, z) => s + z),
            }}
          >
            <img src={flower.imageUrl} />
          </animated.div>
        </div>
      </Link>

      {!isHomeView && (
        <div className="flex flex-col justify-center items-center text-lg font-bold font-playfair p-1">
          <div>{flower.name}</div>
          <div className="font-light text-base">
            {convertPrice(flower.price)}
          </div>
        </div>
      )}

      {isHomeView && (
        <div className="w-full pt-3">
          <Button
            label="Add to Cart"
            className="text-white font-normal flex w-full justify-center py-1"
            handleOnClick={handleOnAddToCart}
          />
        </div>
      )}
    </div>
  );
};
