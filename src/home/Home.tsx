import { HomeBanner } from "./HomeBanner";
import { FreshPicksArea } from "./FreshPicksArea";

export const Home = () => {
  return (
    <div className="flex flex-col grow items-center ">
      <HomeBanner />
      <FreshPicksArea />
      {/*under banner */}
    </div>
  );
};
