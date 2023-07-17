import React, { useState, useEffect } from "react";
import connexion from "../services/connexion";
import "./GalleryImage.css";
import ImageCard from "./ImageCard";
import { Parallax } from "react-scroll-parallax";

function GalleryImage() {
  const [works, setWorks] = useState([]);
  const getWorks = async () => {
    try {
      const work = await connexion.get("/works");
      setWorks(work);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWorks();
  }, []);

  return (
    <div className="h-full grid grid-cols-2 gap-1 place-items-center">
      {works.map((work) => (
        <div
          className="w-3/4 flex justify-center flex-col content-center flex-wrap"
          key={work.id}
        >
          <h2 className="text-white text-1xl pb-4">{work.summary_title}</h2>
          <ImageCard
            cls="max-h-max bg-gradient-to-t from-pink to-purple p-1"
            src={work.image_src}
            alt={work.image_alt}
          />
          <h2 className="text-white text-right text-1xl pt-4">{work.date}</h2>
        </div>
      ))}
    </div>
  );
}

export default GalleryImage;
