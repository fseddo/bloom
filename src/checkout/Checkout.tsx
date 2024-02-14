import { useAtom } from "jotai";
import { cartAtom } from "../nav/Navbar";
import { EmptyCartNotice } from "./EmptyCartNotice";
import { CheckoutContents } from "./CheckoutContents";

export const Checkout = () => {
  const [cart] = useAtom(cartAtom);

  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex justify-start flex-col w-1/2 pt-14">
        {cart == null || cart.length < 1 ? (
          <EmptyCartNotice />
        ) : (
          <CheckoutContents />
        )}
      </div>
    </div>
  );
};
