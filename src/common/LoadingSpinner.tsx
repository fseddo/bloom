import { useSpring, animated } from "@react-spring/web";
import { ImSpinner2 } from "react-icons/im";

type Props = {
  size?: number;
};

export const LoadingSpinner = ({ size = 15 }: Props) => {
  const spinnerStyle = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    config: {
      mass: 1,
      tension: 13,
      friction: 5,
      clamp: true,
      velocity: 0.2,
    },
  });

  return (
    <animated.div style={{ ...spinnerStyle, width: size, height: size }}>
      <ImSpinner2 size={size} />
    </animated.div>
  );
};
