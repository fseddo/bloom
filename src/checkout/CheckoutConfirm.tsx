import { Link } from "react-router-dom";
import { AppRoute } from "../common/AppRoute";
import { Button } from "../common/Button";

export const CheckoutConfirm = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex justify-start flex-col w-1/2 pt-14">
        <div className="flex flex-col py-32 gap-10 items-center">
          <div className="text-3xl font-bold">
            We are currently not accepting orders. We apologize for the
            inconvenience!
          </div>
          <Link to={AppRoute.Home}>
            <Button label="Return Home" className="w-fit py-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};
