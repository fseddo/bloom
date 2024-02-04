import { theme } from "../theme";
import { Flower } from "../types/flower/Flower";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HistoryItem } from "./HistoryItem";
import { AppRoute } from "../common/AppRoute";

type Props = {
  flower: Flower;
};

export const HistoryItems = ({ flower }: Props) => {
  return (
    <div className="flex font-bold gap-2 items-center">
      <HistoryItem route={AppRoute.Home} label="Home" />

      <MdKeyboardArrowRight color={theme.colors.gray[500]} />
      <HistoryItem route={AppRoute.Catalog} label="Catalog" />

      <MdKeyboardArrowRight color={theme.colors.gray[500]} />
      <HistoryItem isDisabled label={flower.name} />
    </div>
  );
};
