import { useSpring, animated } from "@react-spring/web";
import { useHover } from "@use-gesture/react";
import React, { useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  color?: string;
  hoverColor?: string;
  className?: string;
  label: string;
  styling?: React.CSSProperties;
  handleOnClick?(): void;
  type?: "submit" | "reset" | "button" | undefined;
};

export const Button = ({
  color = "bg-black",
  hoverColor = "bg-gray-900",
  className,
  label,
  styling,
  handleOnClick,
  type = undefined,
}: Props) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const bindHover = useHover(({ active }) => setIsMouseOver(active));

  const [style] = useSpring(
    () => ({
      config: {
        mass: 1,
        tension: 140,
        friction: 10,
      },
    }),
    [isMouseOver]
  );

  const handleOnClickButton = useCallback(
    () => (handleOnClick != null ? handleOnClick() : undefined),
    [handleOnClick]
  );

  return (
    <animated.button
      {...bindHover()}
      className={twMerge(
        "px-10 py-3 text-xl rounded-md font-jost font-medium text-white",
        isMouseOver ? hoverColor : color,
        className
      )}
      onClick={handleOnClickButton}
      style={{ ...styling, ...style }}
      type={type}
    >
      {label}
    </animated.button>
  );
};
