import { Carousel } from "@material-tailwind/react";
import { CarouselItem } from "./CarouselItem";

export const OldHome = () => {
  return (
    <div className="flex h-screen overflow-x-hidden object-">
      <Carousel
        placeholder={"carousel"}
        // autoplay
        autoplayDelay={7000}
        loop
        transition={{
          duration: 1,
          type: "tween",
        }}
      >
        <CarouselItem
          imageURL={"/carousel/tulips-in-water.jpg"}
          titleText=""
          subText=""
        />
        <CarouselItem
          imageURL={"/carousel/lily-in-water.jpg"}
          titleText=""
          subText=""
        />
        <CarouselItem
          imageURL={"/carousel/handed-bouquet.jpg"}
          imageClassName="object-top"
          titleText=""
          subText=""
        />
        {/* <CarouselItem
          imageURL={"/carousel/rose-multicolor.jpg"}
          titleText=""
          imageClassName="object-left-top"
          subText=""
        /> */}
        <CarouselItem
          imageURL={"/carousel/wedding.jpg"}
          imageClassName="object-right-top"
          titleText=""
          subText=""
        />
        {/* 

        <CarouselItem
          imageURL={"/carousel/cat-sunflower.jpg"}
          titleText=""
          subText=""
        />
        <CarouselItem
          imageURL={"/carousel/daisies-in-pot.jpg"}
          imageClassName="object-top"
          titleText=""
          subText=""
        /> */}
      </Carousel>
    </div>
  );
};
