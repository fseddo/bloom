import { Reviews } from "./Reviews";

export const ReviewBanner = () => {
  return (
    <div className="pt-20 pb-16 flex justify-center flex-col items-center gap-12">
      <div className="text-6xl font-bold font-playfair">
        For the love of Bloom
      </div>
      <div className="font-josefinSans text-xl text-center w-5/12">
        We're probably (OK, definitely) biased when it comes to buying flowers
        online, but don't just take our word for it. Our (rave) reviews speak
        for themselves.
      </div>
      <Reviews />
    </div>
  );
};
