import { useAtom } from "jotai";
import { FlowerType } from "../types/flower/FlowerType";
import { useMemo } from "react";
import { selectedFlowerTypeAtom } from "./FreshPicksArea";
import { twMerge } from "tailwind-merge";
import { useSpring, animated } from "@react-spring/web";

type Props = {
  label: string;
  handleOnClickSegment(flowerType: FlowerType): void;
  flowerType: FlowerType;
};

export const SelectFlowerTypeSegment = ({
  label,
  flowerType,
  handleOnClickSegment,
}: Props) => {
  const [selectedFlowerType] = useAtom(selectedFlowerTypeAtom);

  const isSelected = useMemo(() => {
    return selectedFlowerType === flowerType;
  }, [selectedFlowerType, flowerType]);

  const style = useSpring({
    opacity: isSelected ? 1 : 0,
    from: { opacity: 0 },
    config: {
      mass: 1,
      tension: 140,
      friction: 10,
    },
  });

  return (
    <div
      className={twMerge("cursor-pointer", isSelected && "font-bold")}
      onClick={() => handleOnClickSegment(flowerType)}
    >
      {label}
      {isSelected && <animated.hr style={style} className="border-2" />}
    </div>
  );
};
