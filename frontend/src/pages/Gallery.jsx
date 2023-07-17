import React from "react";
import GalleryImage from "../components/GalleryImage";

function Gallery() {
  return (
    <div className="bg-contain bg-[url('src/assets/pattern.jpg')] pt-20">
      <GalleryImage />
    </div>
  );
}

export default Gallery;
