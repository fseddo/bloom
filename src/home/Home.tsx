import { HomeBanner } from "./HomeBanner";
import { FreshPicksArea } from "./FreshPicksArea";
import { VideoBanner } from "./VideoBanner";
import { ReviewBanner } from "./ReviewBanner";
export const Home = () => {
  return (
    <div className="flex flex-col grow items-center">
      <HomeBanner />
      <FreshPicksArea />
      <VideoBanner />
      <ReviewBanner />
    </div>
  );
};
