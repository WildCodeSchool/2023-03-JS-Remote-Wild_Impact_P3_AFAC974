import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import connexion from "../services/connexion";
import "./GalleryImage.css";
import ImageCard from "./ImageCard";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

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
    <div className="h-max grid grid-cols-2 gap-10 place-items-center justify-center">
      {/* <Parallax pages={1} style={{ top: "0", left: "0" }}> */}
      {works.map((work) => (
        <div
          className="w-3/4 flex justify-center flex-col content-center flex-wrap"
          key={work.id}
        >
          {/* <ParallaxLayer offset={1.5} speed={1.5}> */}
          <h2 className="text-white text-1xl pb-4">{work.summary_title}</h2>
          <ImageCard
            cls="max-h-[32rem] bg-gradient-to-t from-pink to-purple p-1"
            src={work.image_src}
            alt={work.image_alt}
          />
          <div className="flex justify-between pt-4">
            <Link to={`/gallery/${work.id}`}>
              <button
                type="button"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple to-pink group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  En savoir plus
                </span>
              </button>
            </Link>
            <h2 className="text-white text-right text-1xl pt-3">{work.date}</h2>
            {/* </ParallaxLayer> */}
          </div>
        </div>
      ))}
      {/* </Parallax> */}
    </div>
  );
}

export default GalleryImage;
