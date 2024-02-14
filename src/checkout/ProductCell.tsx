import { Link } from "react-router-dom";
import { AppRoute } from "../common/AppRoute";
import { getPath } from "../common/getPath";
import { Flower } from "../types/flower/Flower";

type Props = {
  flower: Flower;
};

export const ProductCell = ({ flower }: Props) => {
  return (
    <div className="flex gap-10 items-center">
      <img className="max-w-[200px]" src={flower.imageUrl} />
      <Link
        to={getPath(AppRoute.FlowerDetails, {
          flowerId: flower.id.toString(),
        })}
      >
        <div className="">{flower.name}</div>
      </Link>
    </div>
  );
};
