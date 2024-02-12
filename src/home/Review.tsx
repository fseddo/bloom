import { FaStar } from "react-icons/fa";

type Props = {
  name: string;
  subject: string;
  description: string;
};

export const Review = ({ name, subject, description }: Props) => {
  return (
    <div className="border border-black p-8 gap-4 flex flex-col flex-1">
      <div className="text-3xl text-black font-playfair font-bold">{name}</div>
      <div className="flex">
        <FaStar color="pink" />
        <FaStar color="pink" />
        <FaStar color="pink" />
        <FaStar color="pink" />
        <FaStar color="pink" />
      </div>
      <div className="font-playfair text-2xl font-bold">{subject} </div>
      <div className="font-jost text-2xl">{description}</div>
    </div>
  );
};
