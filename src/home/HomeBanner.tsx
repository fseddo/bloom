import { AppRoute } from "../common/AppRoute";
import { Link } from "react-router-dom";
import { Button } from "../common/Button";

export const HomeBanner = () => {
  return (
    <div className="h-[700px] overflow-hidden flex items-start relative text-center">
      <img className="w-full" src="/home-banner.jpg" />
      <div
        className="absolute top-72 text-8xl text-white font-playfair drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]  left-1/2"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        Shop Our Arrangements
      </div>

      <Link to={AppRoute.Catalog}>
        <Button
          color={"bg-pinkButton"}
          hoverColor="bg-pinkButtonHover"
          label="SHOP NOW"
          className="absolute bottom-48 left-1/2 text-black"
          styling={{ transform: "translate(-50%, -50%)" }}
        />
      </Link>
    </div>
  );
};
