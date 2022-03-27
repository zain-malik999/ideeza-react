import React from "react";
import { Button } from "atoms";
import { GalleryCard } from "orgasms";

function Gallery() {
  return (
    <div className="rounded-lg bg-white shadow-md space-y-2 p-5 md:px-6 px-4 w-full">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 pb-4 md:pt-2 items-center">
        <GalleryCard
          img="/assets/images/car.png"
          value="Flame reducers for military"
          imgClasses="rounded-lg"
        />
        <GalleryCard
          img="/assets/images/car.png"
          value="Flame reducers for military"
          imgClasses="rounded-lg"
        />
        <GalleryCard
          img="/assets/images/car.png"
          value="Flame reducers for military"
          imgClasses="rounded-lg"
        />
        <GalleryCard
          img="/assets/images/car.png"
          value="Flame reducers for military"
          imgClasses="rounded-lg"
        />
      </div>
      <Button
        value="Add new image"
        className="text-md transform-none text-white bg-current tracking-tight font-sans px-5 py-2"
      />
    </div>
  );
}

export default Gallery;
