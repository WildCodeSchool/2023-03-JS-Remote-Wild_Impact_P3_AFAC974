import React, { useState, useEffect } from "react";
import connexion from "../services/connexion";
import AFAC_974_7 from "../assets/AFAC_974_7.jpg";
import AFAC_974_3 from "../assets/AFAC_974_3.jpg";
import ChâteauDeCoupvray from "../assets/ChâteauDeCoupvray.png";
import hexa from "../assets/hexa.png";

function Author() {
  const [biographies, setBiographies] = useState([]);

  const getBiographies = async () => {
    try {
      const bio = await connexion.get("/biographies");
      setBiographies(bio);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBiographies();
  }, []);

  return (
    <div className="bg-black h-screen">
      <h1
        className="text-right text-white underline-offset-8 font-bold text-2xl"
        type="text"
        value="text"
      >
        BIOGRAPHIE
      </h1>
      <div className="border-t-4 border-pink h-100 w-full"> </div>
      {biographies.map((biographie) => (
        <div className="flex flex-col  m-10 text-white " key={biographie.id}>
          <div className="flex">
            <img className="w-10 h-10" src={hexa} alt="logo" />
            <h3 className="mt-2 font-bold text-2xl">{biographie.title1}</h3>
          </div>
          <div className="flex m-5">
            <img
              className="w-40 h-50 mr-5"
              src={AFAC_974_7}
              alt={biographie.image1_alt}
            />
            <p className="text-justify "> {biographie.text1}</p>
          </div>

          <div className="flex">
            <img className="w-10 h-10" src={hexa} alt="logo" />
            <h3 className="mt-2 font-bold text-2xl">{biographie.title2}</h3>
          </div>
          <div className="flex flex-row-reverse items-center m-5">
            <img
              className="w-50 h-60 ml-5"
              src={AFAC_974_3}
              alt={biographie.image1_alt}
            />
            <p className="text-justify"> {biographie.text2}</p>
          </div>

          <div className="flex">
            <img className="w-10 h-10" src={hexa} alt="logo" />
            <h3 className="mt-2 font-bold text-2xl">{biographie.title3}</h3>
          </div>
          <div className="flex m-5">
            <img
              className="w-60 h-40 mr-5"
              src={ChâteauDeCoupvray}
              alt={biographie.image3_alt}
            />
            <p className="text-justify"> {biographie.text3}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Author;
