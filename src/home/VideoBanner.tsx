import { Link } from "react-router-dom";
import { AppRoute } from "../common/AppRoute";
import { Button } from "../common/Button";

export const VideoBanner = () => {
  return (
    <div className="pt-20 relative">
      <video
        autoPlay
        muted
        loop
        src="/home-video.mp4"
        width={window.innerWidth}
      />
      <div className="absolute left-20 top-40">
        <div className="flex flex-col w-1/4 gap-10">
          <div className="flex flex-col text-white font-bold gap-6 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            <div className="text-7xl font-playfair">We Are Bloom</div>
            <div className="text-3xl w-5/6">
              Our story began with a simple idea: to change the way people buy
              flowers online. More than twelve years and millions of orders
              later, we are still constantly raising the standard for bouquets
              shipped to your doorstep
            </div>
          </div>
          <Link to={AppRoute.About}>
            <Button label="Experience Our Story" />
          </Link>
        </div>
      </div>
    </div>
  );
};
