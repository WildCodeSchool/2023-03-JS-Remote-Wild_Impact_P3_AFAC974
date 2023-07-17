import React from "react";
import GalleryImage from "../components/GalleryImage";

function Gallery() {
  return (
    <div className="">
      <div className="bg-cover bg-[url('src/assets/bggallerie.jpg')] h-[1000px]">
        <div className="relative bg-black h-full w-full opacity-60 z-10" />
        <div className="relative mt-[-60px] flex flex-col text-right">
          <h1 className="text-3xl text-white pr-[35px] z-10">Gallerie</h1>
          <div className="w-11/12 h-1 bg-gradient-to-r from-pink to-purple z-10 ml-8" />
        </div>
      </div>
      <div className="bg-contain bg-[url('src/assets/pattern.jpg')] pt-20">
        <GalleryImage />
      </div>
    </div>
  );
}

export default Gallery;
