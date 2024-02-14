import { Link } from "react-router-dom";
import { getDeliveryDate } from "../cart/getDeliveryDate";
import { Button } from "../common/Button";
import { CheckoutTable } from "./CheckoutTable";
import { AppRoute } from "../common/AppRoute";

export const CheckoutContents = () => {
  return (
    <>
      <div className="text-3xl font-jost pb-10">{`Expected Delivery Date: ${getDeliveryDate()} `}</div>
      <CheckoutTable />
      <div className="flex justify-end pt-4">
        <Link to={AppRoute.CheckoutConfirm}>
          <Button label="Checkout" className="w-fit px-8 py-2" />
        </Link>
      </div>
    </>
  );
};
