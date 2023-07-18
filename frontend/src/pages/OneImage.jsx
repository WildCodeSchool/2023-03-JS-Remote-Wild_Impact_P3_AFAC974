/* eslint-disable import/no-named-as-default */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import connexion from "../services/connexion";
import ImageCard from "../components/ImageCard";
import hexa from "../assets/hexa.png";
import Carousel from "../components/Carousel";

function OneImage() {
  const { id } = useParams();
  const [oneImage, setOneImage] = useState([]);
  const [oneArticle, setOneArticle] = useState([]);

  const getOneImage = async () => {
    try {
      const desc = await connexion.get(`/works/${id}`);
      setOneImage(desc);
    } catch (error) {
      console.error(error);
    }
  };

  const getOneArticle = async () => {
    try {
      const art = await connexion.get(`/works/${id}/articles`);
      setOneArticle(art);
    } catch (error) {
      console.error(error);
    }
  };

  const addToFavourites = async () => {
    try {
      await connexion.post("/favourites", { works_id: oneImage.id });
      getOneImage();
    } catch (err) {
      console.error(err);
    }
  };

  const removeToFavourites = async () => {
    try {
      await connexion.delete(`/favourites/${oneImage.id}`);
      getOneImage();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOneImage();
    getOneArticle();
  }, []);

  return (
    <div className="bg-black h-full">
      <h1 className="text-right text-white underline-offset-8 font-bold text-2xl pt-5 mr-5">
        {oneImage.title}
      </h1>
      <div className="border-t-2 border-pink h-100 ml-20 mr-5 mb-10" />
      <div className="flex justify-center">
        <ImageCard
          cls="max-h-m max-w-m content-center"
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
          Technique : {oneImage.technique}
        </p>
        <div className="border-t-2 border-pink h-100 m-5" />
        <p className="text-left text-sm ml-5 mr-5">
          Catégorie : {oneImage.category}
        </p>
        <div className="border-t-2 border-pink h-100 m-5" />
        <p className="text-left text-sm ml-5 mr-5">
          Dimensions : {oneImage.format}
        </p>
        <div className="border-t-2 border-pink h-100 m-5" />
        <p className="text-left text-sm ml-5 mr-5">Date : {oneImage.date}</p>
        <div className="border-t-2 border-pink h-100 m-5" />
        {oneArticle && (
          <div>
            <p className="text-left text-sm ml-5 mr-5">
              Plus d'infos :{" "}
              <a
                href={oneArticle.src}
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                cliquez ici
              </a>
            </p>
            <div className="border-t-2 border-pink h-100 m-5" />
          </div>
        )}
      </div>
      <div className="flex flex-col justify-end ml-14">
        {oneImage.isFavourite ? (
          <button
            type="button"
            className="w-fit relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple to-pink group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
            value={oneImage.id}
            onClick={removeToFavourites}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Supprimer des favoris
            </span>
          </button>
        ) : (
          <button
            type="button"
            className="w-fit relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple to-pink group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
            value={oneImage.id}
            onClick={addToFavourites}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Ajouter aux favoris
            </span>
          </button>
        )}
      </div>
      <div className="flex ml-10 pt-10 pb-5 text-white">
        <img className="w-11 h-10 mr-2 ml-3" src={hexa} alt="logo" />
        <h3 className="mt-2 font-bold text-xl">Oeuvres similaires</h3>
      </div>
      <Carousel />
    </div>
  );
}

export default OneImage;
