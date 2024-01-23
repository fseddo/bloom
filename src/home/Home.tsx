import { Carousel } from "@material-tailwind/react";

export const Home = () => {
  return (
    <div className="flex h-screen overflow-x-hidden">
      <Carousel placeholder={"hello"} className="rounded-xl">
        <img
          src="/carousel/lilac-in-cup.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <img
          src="/carousel/tulips-in-hand.jpg"
          alt="image 3"
          className="h-full w-full object-cover object-top"
        />
        <img
          src="/carousel/cat-sunflower.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="/carousel/daisies-in-pot.jpg"
          alt="image 3"
          className="h-full w-full object-cover object-top"
        />
        <img
          src="/carousel/tulips-in-water.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <img
          src="/carousel/lily-in-water.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <img
          src="/carousel/roses-on-desk.jpg"
          alt="image 3"
          className="h-full w-full object-cover object-top"
        />
      </Carousel>
    </div>
  );
};
