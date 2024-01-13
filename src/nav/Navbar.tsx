import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div className="flex w-full h-fit bg-beige justify-between gap-4 px-2 py-1">
        <div>
          <img src="logo.png" />
        </div>
        <div className="flex items-center gap-8 text-green-dark font-quicksand p-6 text-lg">
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};
