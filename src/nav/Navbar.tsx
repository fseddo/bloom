import { BsHandbag } from "react-icons/bs";
import { AppRoute } from "../common/AppRoute";
import { NavItem } from "./NavItem";
import { atomWithStorage } from "jotai/utils";
import { Cart } from "../types/order/Cart";
import { getCartTotalItems } from "../cart/getCartTotalItems";
import { useAtom } from "jotai";
import { useMemo } from "react";
import { Link } from "react-router-dom";

export const cartAtom = atomWithStorage<Cart>("cart", undefined);

export const Navbar = () => {
  const [cart] = useAtom(cartAtom);

  const cartTotal = useMemo(() => {
    return getCartTotalItems(cart);
  }, [getCartTotalItems, cart]);

  return (
    <nav className="sticky top-0 z-50">
      <div className="flex w-full h-fit bg-beige gap-4 p-2 items-center pr-4 drop-shadow-sm">
        <div>
          <Link to={AppRoute.Home}>
            <img width={150} src="/bloom-logo.png" />
          </Link>
        </div>
        <div className="flex w-full justify-center items-center">
          <div className="flex text-gray-900 gap-14 font-jost text-lg">
            <NavItem label="Catalog" route={AppRoute.Catalog} />
            <NavItem label="About" route={AppRoute.About} />
            <NavItem label="Contact" route={AppRoute.Contact} />
          </div>
        </div>
        <NavItem disableIsSelected route={AppRoute.Checkout}>
          <div className="flex justify-end gap-2 font-jost text-base text-gray-900 w-[150px]">
            <BsHandbag size={20} />
            Cart {cartTotal > 0 && `(${cartTotal})`}
          </div>
        </NavItem>
      </div>
    </nav>
  );
};
