import { Link } from "react-router-dom";
import { AppRoute } from "../common/AppRoute";
import { useState } from "react";
import { useHover } from "@use-gesture/react";
import { useSpring, animated } from "@react-spring/web";
import { twJoin } from "tailwind-merge";

type Props = {
  route?: AppRoute;
  label: string;
  isDisabled?: boolean;
};

export const HistoryItem = ({ route, label, isDisabled = false }: Props) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const bindHover = useHover(({ active }) => setIsMouseOver(active));

  const [style] = useSpring(
    () => ({
      opacity: isMouseOver && !isDisabled ? 1 : 0.9,
      textDecoration: isMouseOver && !isDisabled ? "underline" : "none",
      config: {
        mass: 1,
        tension: 140,
        friction: 10,
      },
    }),
    [isMouseOver]
  );

  return (
    <animated.div
      {...bindHover()}
      className={twJoin(!isDisabled && "cursor-pointer")}
      style={style}
    >
      {!isDisabled && route != null ? (
        <Link to={route}>{label}</Link>
      ) : (
        <div>{label}</div>
      )}
    </animated.div>
  );
};
