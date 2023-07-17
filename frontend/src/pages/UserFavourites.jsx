import React from "react";
import hexa from "../assets/hexa.png";

function UserFavourites() {
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
      <div className="flex-col text-white ml-20 mt-10 pb-20">
        <div className="flex flex-col">
          <div className="flex">
            <img className="w-10 h-10" src={hexa} alt="logo" />
            <div className="flex flex-col">
              <h2>Titre de l'oeuvre</h2>
              <button type="button" className="bg-pink">
                Supprimer
              </button>
            </div>
          </div>

          <div className="border-t-4 border-grey h-100 mt-4 mb-4"> </div>
        </div>
      </div>
    </div>
  );
}

export default UserFavourites;
