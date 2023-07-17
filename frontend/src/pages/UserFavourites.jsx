import React, { useEffect, useState } from "react";
import connexion from "../services/connexion";

function UserFavourites() {
  const [favourites, setFavourites] = useState([]);

  const getFavourites = async () => {
    try {
      const ab = await connexion.get("/favourites");
      setFavourites(ab);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFavourites();
  }, []);

  return (
    <div className="bg-black h-full pr-20">
      <h1
        className="text-right text-white underline-offset-8 font-bold text-2xl pt-5"
        type="text"
        value="text"
      >
        FAVORIS
      </h1>
      <div className="border-t-4 border-pink h-100 w-5/6 ml-20"> </div>
      <div className="flex-col text-white ml-20 mt-16">
        <div className="flex flex-col pb-40">
          {favourites.map((fav) => (
            <div>
              <div className="flex mb-8 mt-8">
                <img
                  className="h-96"
                  src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                    fav.image_src
                  }`}
                  alt={fav.image_alt}
                />
                <div className="flex flex-col justify-end ml-4">
                  <p className="font-bold text-2xl">{fav.summary_title}</p>
                  <button
                    type="button"
                    className="bg-pink font-bold text-1xl w-40 mt-2"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
              <div className="border-t-4 border-grey"> </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserFavourites;
