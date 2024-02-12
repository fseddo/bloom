import { Typography } from "@material-tailwind/react";
import { twMerge } from "tailwind-merge";

type Props = {
  textBoxClassName?: string;
  titleText?: string;
  subText?: string;
  imageURL: string;
  imageClassName?: string;
};

export const CarouselItem = ({
  subText,
  textBoxClassName,
  titleText,
  imageURL,
  imageClassName,
}: Props) => {
  return (
    <div className="relative h-full w-full">
      <img
        src={imageURL}
        alt="image 3"
        className={twMerge("h-full w-full object-cover", imageClassName)}
      />
      <div className="absolute inset-0 flex pr-32 h-full w-full items-center justify-end bg-black/10">
        <div className={textBoxClassName}>
          <Typography
            placeholder={"carousel item"}
            variant="h1"
            color="white"
            className="mb-4 text-3xl "
          >
            {titleText}
          </Typography>
          <Typography
            placeholder={"carousel item"}
            variant="lead"
            color="white"
            className="mb-12 opacity-80"
          >
            {subText}
          </Typography>
        </div>
      </div>
    </div>
  );
};
