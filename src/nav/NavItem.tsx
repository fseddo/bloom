import { Link, useLocation } from "react-router-dom";
import { AppRoute } from "../common/AppRoute";
import { PropsWithChildren, useMemo, useState } from "react";
import { useHover } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/web";

type Props = {
  label?: string;
  route: AppRoute;
  disableIsSelected?: boolean;
};

export const NavItem = ({
  label,
  route,
  children,
  disableIsSelected = false,
}: PropsWithChildren<Props>) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const bindHover = useHover(({ active }) => setIsMouseOver(active));
  const { pathname } = useLocation();

  const isSelected = useMemo(
    () => route === pathname && !disableIsSelected,
    [route, pathname]
  );

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

  return (
    <animated.div {...bindHover()} style={style} className="px-8">
      <Link to={route}>
        {label}
        {children}
      </Link>
    </animated.div>
  );
};
