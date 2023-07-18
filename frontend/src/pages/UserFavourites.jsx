import React, { useEffect, useState } from "react";
import connexion from "../services/connexion";

function UserFavourites() {
  const [favourites, setFavourites] = useState([]);

  const getFavourites = async () => {
    try {
      const fav = await connexion.get(`/favourites`);
      if (fav) {
        setFavourites(fav);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFavourites();
  }, []);

  const deleteFavourite = async (e, worksId) => {
    e.preventDefault();
    try {
      await connexion.delete(`/favourites/${worksId}`);
      getFavourites();
    } catch (error) {
      console.error(error);
    }
  };

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
          {favourites.length &&
            favourites.map((fav) => (
              <div key={fav.works_id}>
                <div className="flex mb-8 mt-8">
                  <img
                    className="h-60"
                    src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                      fav.image_src
                    }`}
                    alt={fav.image_alt}
                  />
                  <div className="flex flex-col justify-end ml-4">
                    <p className="font-bold text-xl">{fav.title}</p>
                    <button
                      type="button"
                      className="w-fit relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple to-pink group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                      onClick={(e) => deleteFavourite(e, fav.works_id)}
                      value={fav.works_id}
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Supprimer
                      </span>
                    </button>
                  </div>
                </div>
                <div className="border-t-4 border-pink"> </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default UserFavourites;
