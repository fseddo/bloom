import { Flower } from "../types/flower/Flower";
import { convertPrice } from "../common/convertPrice";
import { useRef } from "react";
import { useGesture } from "@use-gesture/react";
import { animated, to, useSpring } from "@react-spring/web";
import { Link } from "react-router-dom";
import { atom, useAtom } from "jotai";
import { getPath } from "../common/getPath";
import { AppRoute } from "../common/AppRoute";
import { Button } from "../common/Button";

type Props = {
  flower: Flower;
  isHomeView?: boolean;
};

export const selectedFlowerAtom = atom<Flower | undefined>(undefined);

export const CatalogFlower = ({ flower, isHomeView = false }: Props) => {
  const [, setSelectedFlower] = useAtom(selectedFlowerAtom);

  const handleOnClickFlower = () => {
    setSelectedFlower(flower);
  };

  const target = useRef(null);

  const [{ zoom, scale }, api] = useSpring(() => ({
    scale: 1,
    zoom: 0,
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  useGesture(
    {
      onMove: () =>
        api({
          scale: 1.1,
        }),
      onHover: ({ hovering }) => !hovering && api({ scale: 1 }),
    },
    { target, eventOptions: { passive: false } }
  );

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
            handleOnClick={() => {}}
          />
        </div>
      )}
    </div>
  );
};
