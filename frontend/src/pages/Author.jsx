import React, { useState, useEffect } from "react";
import connexion from "../services/connexion";
import ImageCard from "../components/ImageCard";
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
    <div className="bg-black h-full">
      <h1
        className="text-right text-white underline-offset-8 font-bold text-2xl pt-5 pr-20"
        type="text"
        value="text"
      >
        BIOGRAPHIE
      </h1>
      <div className="border-t-4 border-pink h-100 w-5/6 ml-20"> </div>
      {biographies.map((biographie) => (
        <div className="flex flex-col  m-10 text-white " key={biographie.id}>
          <div className="flex m-5">
            <ImageCard
              cls="w-50 h-80 mr-10"
              src={biographie.image1_src}
              alt={biographie.image1_alt}
            />
            <div className="flex-col">
              <div className="flex pb-5">
                <img className="w-10 h-10" src={hexa} alt="logo" />
                <h3 className="mt-2 font-bold text-2xl">{biographie.title1}</h3>
              </div>
              <p className="text-justify "> {biographie.text1}</p>
            </div>
          </div>

          <div className="flex flex-row-reverse items-center m-5">
            <ImageCard
              cls="w-50 h-80 ml-10"
              src={biographie.image2_src}
              alt={biographie.image2_alt}
            />
            <div>
              <div className="flex pb-5">
                <img className="w-10 h-10" src={hexa} alt="logo" />
                <h3 className="mt-2 font-bold text-2xl">{biographie.title2}</h3>
              </div>
              <p className="text-justify"> {biographie.text2}</p>
            </div>
          </div>

          <div className="flex m-5">
            <ImageCard
              cls="w-80 h-60 mr-10"
              src={biographie.image3_src}
              alt={biographie.image3_alt}
            />
            <div className="flex-col">
              <div className="flex pb-5">
                <img className="w-10 h-10" src={hexa} alt="logo" />
                <h3 className="mt-2 font-bold text-2xl">{biographie.title3}</h3>
              </div>
              <p className="text-justify"> {biographie.text3}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Author;
