import React, { useState, useEffect } from "react";
import connexion from "../services/connexion";
import "./GalleryImage.css";
import ImageCard from "./ImageCard";

const imgCls = ["slower", "slower1"];

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
    <div>
      {works.map((work, index) => (
        <div
          className={`img-wrapper ${imgCls[index % imgCls.length]}`}
          key={work.id}
        >
          <div className="flex flex-col">
            <h2 className="text-white">{work.title}</h2>
            <a
              href="https://altphotos.com/photo/retro-boy-doll-wearing-elegant-clothes-330/"
              rel="noopener"
            >
              <ImageCard src={work.image_src} alt={work.image_alt} />
            </a>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}

export default GalleryImage;
