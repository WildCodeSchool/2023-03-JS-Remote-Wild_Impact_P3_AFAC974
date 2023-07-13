import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import connexion from "../services/connexion";
import ImageCard from "../components/ImageCard";
import hexa from "../assets/hexa.png";

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
      <h1 className="text-right text-white underline-offset-8 font-bold text-2xl pt-5 mr-5">
        {oneImage.title}
      </h1>
      <div className="border-t-2 border-pink h-100 ml-20 mr-5 mb-10" />
      <div className="flex justify-center">
        <ImageCard
          cls="max-h-sm max-w-sm content-center"
          src={oneImage.image_src}
          alt={oneImage.image_alt}
        />
      </div>
      <div className="flex ml-10 pt-10 pb-5 text-white">
        <img className="w-11 h-10 mr-2 ml-3" src={hexa} alt="logo" />
        <h3 className="mt-2 font-bold text-xl">Description</h3>
      </div>
      <div className="text-white ml-10">
        <p className="text-left text-sm ml-5 mr-5 pb-5 ">{oneImage.summary1}</p>
        <p className="text-left text-sm ml-5 mr-5 pb-5 ">{oneImage.summary2}</p>
        <p className="text-left text-sm ml-5 mr-5 pb-5 ">{oneImage.summary3}</p>
        <p className="text-left text-sm ml-5 mr-5 pb-5 ">{oneImage.summary4}</p>
        <div className="border-t-2 border-pink h-100 m-5" />
        <p className="text-left text-sm ml-5 mr-5">
          Technique : {oneImage.techniquesId}
        </p>
        <div className="border-t-2 border-pink h-100 m-5" />
        <p className="text-left text-sm ml-5 mr-5">
          Catégorie : {oneImage.categoriesId}
        </p>
        <div className="border-t-2 border-pink h-100 m-5" />
        <p className="text-left text-sm ml-5 mr-5">
          Dimensions : {oneImage.format}
        </p>
        <div className="border-t-2 border-pink h-100 m-5" />
        <p className="text-left text-sm ml-5 mr-5">Date : {oneImage.date}</p>
        <div className="border-t-2 border-pink h-100 m-5" />
      </div>
      <div className="flex ml-10 pt-10 pb-5 text-white">
        <img className="w-11 h-10 mr-2 ml-3" src={hexa} alt="logo" />
        <h3 className="mt-2 font-bold text-xl">Oeuvres similaires</h3>
      </div>
    </div>
  );
}

export default OneImage;
