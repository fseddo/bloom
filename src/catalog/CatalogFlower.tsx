import { Flower } from "../types/flower/Flower";
import { convertPrice } from "../common/convertPrice";
import { useRef } from "react";
import { useGesture } from "@use-gesture/react";
import { animated, to, useSpring } from "@react-spring/web";

type Props = {
  flower: Flower;
};

export const CatalogFlower = ({ flower }: Props) => {
  const target = useRef(null);

  const [{ zoom, scale }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    zoom: 0,
    x: 0,
    y: 0,
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  useGesture(
    {
      onMove: () =>
        api({
          scale: 1.1,
        }),
      onHover: ({ hovering }) =>
        !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
    },
    { target, eventOptions: { passive: false } }
  );
  return (
    <div className="p-2">
      <div className="z-10 overflow-hidden max-w-[700px] max-h-[500px] cursor-pointer">
        <animated.div
          ref={target}
          style={{
            scale: to([scale, zoom], (s, z) => s + z),
          }}
        >
          <img src={flower.imageUrl} />
        </animated.div>
      </div>

      <div className="flex flex-col justify-center items-center text-lg font-bold font-playfair p-1">
        <div>{flower.name}</div>
        <div className="font-light text-base">{convertPrice(flower.price)}</div>
      </div>
    </div>
  );
};
