import { BsHandbag } from "react-icons/bs";
import { AppRoute } from "../common/AppRoute";
import { NavItem } from "./NavItem";
import { atomWithStorage } from "jotai/utils";
import { Cart } from "../types/order/Cart";

export const cartAtom = atomWithStorage<Cart>("cart", undefined);

export const Navbar = () => {
  return (
    <nav>
      <div className="flex w-full h-fit bg-beige gap-4 px-2 py-1 items-center">
        <div className="min-w-[250px]">
          <img width={250} src="/bloom-logo.png" />
        </div>
        <div className="flex w-full justify-between px-10 items-center">
          <div className="flex text-gray-900 gap-6 font-josefinSans p-6 text-xl">
            <NavItem label="Home" route={AppRoute.Home} />
            <NavItem label="Catalog" route={AppRoute.Catalog} />
            <NavItem label="About" route={AppRoute.About} />
            <NavItem label="Contact" route={AppRoute.Contact} />
          </div>
          <div className="flex gap-3 text-gray-900  font-josefinSans text-lg pr-8">
            <BsHandbag size={23} />
            Cart
          </div>
        </div>
      </div>
    </nav>
  );
};
