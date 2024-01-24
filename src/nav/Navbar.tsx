import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";

export const Navbar = () => {
  return (
    <nav>
      <div className="flex w-full h-fit bg-beige gap-4 px-2 py-1 items-center">
        <div className="min-w-[250px]">
          <img width={250} src="logo.png" />
        </div>
        <div className="inline-block m-auto text-subtext font-quicksand p-6 text-lg">
          <Link className="px-8" to="/">
            Home
          </Link>
          <Link className="px-8" to="/catalog">
            Catalog
          </Link>
          <Link className="px-8" to="/about">
            About
          </Link>
          <Link className="px-8" to="/contact">
            Contact Us
          </Link>
        </div>
        <div>
          <BsHandbag size={23} />
        </div>
      </div>
    </nav>
  );
};
