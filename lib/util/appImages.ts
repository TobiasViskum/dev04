import { fitness, dog } from "@/assets/images";
import { StaticImageData } from "next/image";

interface AppImages {
  [key: string]: {
    image: StaticImageData;
  };
}

export const appImages: AppImages = {
  fitness: {
    image: fitness,
  },
  dog: {
    image: dog,
  },
};
