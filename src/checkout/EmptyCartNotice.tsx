import { Link } from "react-router-dom";
import { Button } from "../common/Button";
import { AppRoute } from "../common/AppRoute";

export const EmptyCartNotice = () => {
  return (
    <div className="flex flex-col py-32 gap-10 items-center">
      <div className="text-3xl font-bold">Your cart is currently empty</div>
      <Link to={AppRoute.Catalog}>
        <Button label="Return to Our Catalog" className="w-fit py-2" />
      </Link>
    </div>
  );
};
