import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import connexion from "../services/connexion";
import ImageCard from "../components/ImageCard";

function OneImage() {
  const { id } = useParams();
  const [oneImage, setOneImage] = useState([]);

  const getOneImage = async () => {
    try {
      const desc = await connexion.get(`/works/${id}`);
      setOneImage(desc);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOneImage();
  }, []);

  return (
    <div className="bg-black h-full">
      <h1
        className="text-right text-white underline-offset-8 font-bold text-2xl pt-5 pr-20"
        type="text"
        value="text"
      >
        {oneImage.title}
      </h1>
      <div className="border-t-4 border-pink h-100 w-5/6 ml-20"> </div>

      <ImageCard
        cls="w-80 h-60 mr-10"
        src={oneImage.image_src}
        alt={oneImage.image_alt}
      />
    </div>
  );
}

export default OneImage;
