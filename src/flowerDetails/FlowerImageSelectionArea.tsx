import { Flower } from "../types/flower/Flower";
import { SelectableFlowerImage } from "./SelectableFlowerImage";

type Props = {
  selectedImageUrl: string | undefined;
  flower: Flower;
};

export const FlowerImageSelectionArea = ({
  flower,
  selectedImageUrl,
}: Props) => {
  return (
    <div className="flex gap-3 h-fit">
      {/*image selector*/}
      <div className="flex flex-col gap-3 justify-center ">
        <SelectableFlowerImage imageUrl={flower.imageUrl} />
        <SelectableFlowerImage imageUrl={flower.imageUrlsecondary} />
      </div>
      {/*main image*/}
      <div className="flex items-start">
        <img className="max-w-[850px]" src={selectedImageUrl} />
      </div>
    </div>
  );
};
