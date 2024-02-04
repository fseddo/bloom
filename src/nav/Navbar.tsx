import { BsHandbag } from "react-icons/bs";
import { AppRoute } from "../common/AppRoute";
import { NavItem } from "./NavItem";

export const Navbar = () => {
  return (
    <nav>
      <div className="flex w-full h-fit bg-beige gap-4 px-2 py-1 items-center">
        <div className="min-w-[250px]">
          <img width={250} src="/logo.png" />
        </div>
        <div className="flex m-auto text-gray-900 font-quicksand p-6 text-lg">
          <NavItem label="Home" route={AppRoute.Home} />
          <NavItem label="Catalog" route={AppRoute.Catalog} />
          <NavItem label="About" route={AppRoute.About} />
          <NavItem label="Contact" route={AppRoute.Contact} />
        </div>
        <div className="pr-8">
          <BsHandbag size={23} />
        </div>
      </div>
    </nav>
  );
};
