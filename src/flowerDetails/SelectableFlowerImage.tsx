import { useAtom } from "jotai";
import { useCallback, useMemo, useState } from "react";
import { selectedImageUrlAtom } from "./FlowerDetails";
import { twJoin } from "tailwind-merge";
import { useHover } from "@use-gesture/react";
import { useSpring, animated } from "@react-spring/web";

type Props = {
  imageUrl: string | undefined;
};

export const SelectableFlowerImage = ({ imageUrl }: Props) => {
  const [selectedImageUrl, setSelectedImageUrl] = useAtom(selectedImageUrlAtom);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const bindHover = useHover(({ active }) => setIsMouseOver(active));

  const isSelected = useMemo(() => {
    return selectedImageUrl === imageUrl;
  }, [selectedImageUrl, imageUrl]);

  const opacity = useMemo(() => {
    if (isMouseOver) return 1;
    if (isSelected) return 1;
    return 0.5;
  }, [isMouseOver, isSelected]);

  const [style] = useSpring(
    () => ({
      opacity,
      config: {
        mass: 1,
        tension: 140,
        friction: 10,
      },
    }),
    [isMouseOver, isSelected]
  );

  const handleOnClickImage = useCallback(
    (imageUrl: string | undefined) => {
      setSelectedImageUrl(imageUrl);
    },
    [setSelectedImageUrl]
  );

  return (
    <animated.div
      {...bindHover()}
      style={style}
      className={twJoin("w-48 cursor-pointer border-4 border-gray-500")}
      onClick={() => handleOnClickImage(imageUrl)}
    >
      <img src={imageUrl} />
    </animated.div>
  );
};
