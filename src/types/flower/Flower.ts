import { FlowerColor } from "./FlowerColor";
import { FlowerType } from "./FlowerType";

export interface Flower {
  id: number;
  name: string;
  flowerColor: FlowerColor;
  flowerType: FlowerType;
  price: number;
  imageUrl: string;
  imageUrlsecondary: string;
  description: string;
  stock: number;
  createdAt: string;
  updatedAt: string;
}
