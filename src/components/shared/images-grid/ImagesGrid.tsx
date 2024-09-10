import { Image } from "@nextui-org/image";
import React, { CSSProperties } from "react";

export interface ImagesGrid {
  images: string[];
  onImageClick: (imgIndex: number) => void;
}

const ImagesGrid = ({ images, onImageClick }: ImagesGrid) => {
  const styles: CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${2}, 1fr)`,
    gridTemplateRows: `repeat(${2}, 1fr)`,
  };
  return (
    <section className="grid" style={styles}>
      {images?.slice(0, 4).map((img, idx: number) => (
        <div
          onClick={() => onImageClick(idx)}
          key={img}
          className="h-[200px] md:h-[250px] relative cursor-pointer"
        >
          <Image
            src={img}
            alt="Post Image"
            key={img}
            className=" rounded-none w-full  h-full object-cover"
            classNames={{
              img: "!w-full !h-full  object-cover !max-w-none",
              wrapper: "!size-full !max-w-none ",
            }}
          />
          {images?.length > 2 && idx === 3 && (
            <div className=" size-full z-50  bg-black/70 absolute top-0 left-0 flex  justify-center items-center">
              <p className=" text-white text-lg">+4</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default ImagesGrid;
