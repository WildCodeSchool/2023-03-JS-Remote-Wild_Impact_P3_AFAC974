import React from "react";
import { Link } from "react-router-dom";
import bouton from "../assets/bouton.png";

function HomePage() {
  return (
    <div className="bg-cover h-screen w-screen bg-[url('src/assets/background.jpg')] flex flex-col justify-center items-center">
      <h2 className="text-white text-2xl text-center pr-[450px] pb-2">
        Exposition dédiée à
      </h2>
      <h1 className="text-white text-5xl font-bold text-center">
        Hippolyte Mortier
      </h1>
      <h1 className="text-white text-5xl font-bold text-center pr-[11.5rem]">
        De Trévise
      </h1>
      <div className="">
        <h3 className="relative z-20 bg-black bg-opacity-60 w-[10rem] h-[3rem] border-solid border-white border-4 text-xl text-white text-center mt-12 ml-[3rem] mb-[-1rem] pt-2 pb-2 ">
          Le Concept
        </h3>
        <p className="bg-black w-[500px] h-[18rem] bg-opacity-60 text-white p-10 ml-[10rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
          sagittis libero. Nullam porttitor consectetur enim molestie rhoncus.
          Morbi lacinia dolor non magna aliquet dapibus. Morbi a venenatis ante.
          Ut imperdiet consectetur sem et dapibus. Nulla blandit condimentum
          rutrum. Cras hendrerit, lectus eu dapibus sagittis, augue ligula
          eleifend justo, vitaluctus odio sem sed dui.
        </p>
        <div className="relative ml-[50px]">
          <img
            className="h-[10rem] pl-[539px] mt-[-5rem]"
            src={bouton}
            alt="logo_deconnexion"
          />
          <Link
            to="/gallery"
            className="absolute bottom-[60px] right-[20px] text-white text-3xl"
          >
            ENTREZ
          </Link>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
