import { useState } from "react";
import { AppRoute } from "../common/AppRoute";
import { Link } from "react-router-dom";
import { useHover } from "@use-gesture/react";
import { useSpring, animated } from "@react-spring/web";
import { theme } from "../theme";

export const HomeBanner = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const bindHover = useHover(({ active }) => setIsMouseOver(active));

  const [style] = useSpring(
    () => ({
      backgroundColor: isMouseOver
        ? theme.colors.pinkButtonHover
        : theme.colors.pinkButton,
      config: {
        mass: 1,
        tension: 140,
        friction: 10,
      },
    }),
    [isMouseOver]
  );

  return (
    <div className="h-[700px] overflow-hidden flex items-start relative text-center">
      <img className="w-full" src="/carousel/home-banner.jpg" />
      <div
        className="absolute top-72 text-8xl text-white font-playfair drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]  left-1/2"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        Shop Our Arrangements
      </div>

      <Link to={AppRoute.Catalog}>
        <animated.button
          {...bindHover()}
          className="absolute bottom-48 px-10 py-3 text-xl rounded-md font-jost font-medium left-1/2 bg-pinkButton"
          style={{ transform: "translate(-50%, -50%)", ...style }}
        >
          SHOP NOW
        </animated.button>
      </Link>
    </div>
  );
};
