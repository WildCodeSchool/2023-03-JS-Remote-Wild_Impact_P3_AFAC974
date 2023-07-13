import React, { useEffect, useState } from "react";
import connexion from "../services/connexion";
import hexa from "../assets/hexa.png";
import island from "../assets/islandAbout.jpg";

function About() {
  const [abouts, setAbouts] = useState([]);

  const getAbouts = async () => {
    try {
      const ab = await connexion.get("/about");
      setAbouts(ab);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAbouts();
  }, []);

  return (
    abouts.length && (
      <div className="bg-black h-full pr-20">
        <h1
          className="text-right text-white underline-offset-8 font-bold text-2xl pt-5"
          type="text"
          value="text"
        >
          A PROPOS
        </h1>
        <div className="border-t-4 border-pink h-100 w-5/6 ml-20"> </div>
        <div className="flex-col text-white ml-20">
          <div className="flex mt-10 pb-5">
            <img className="w-10 h-10" src={hexa} alt="logo" />

            <h3 className="mt-2 font-bold text-2xl">{abouts[0].name}</h3>
          </div>

          <div className="flex pb-5">
            <img className="w-1/2 h-1/2" src={island} alt="ile paradisiaque" />

            <div className="flex flex-col pb-5 ml-10 mr-10">
              <div className="flex" />

              <p className="text-justify ">{abouts[0].summary}</p>
            </div>
          </div>
        </div>
        <div className="flex-col text-white ml-20">
          <div className="flex mt-10 pb-5 justify-end mr-10">
            <img className="w-10 h-10" src={hexa} alt="logo" />

            <h3 className="mt-2 font-bold text-2xl pb-5">Les partenaires</h3>
          </div>

          <div className="flex pb-5">
            <div className="flex flex-col pb-5 ml-10 mr-10">
              <div className="flex" />
              {abouts.slice(1, abouts.length).map((a) => (
                <div className="flex pb-10">
                  <img
                    className="w-24 h-24 mr-5 pt-1"
                    src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                      a.image_src
                    }`}
                    alt={a.image_alt}
                  />
                  <div className="flex flex-col">
                    <h4 className="font-bold text-1x1">{a.name}</h4>
                    <p className="text-justify ">{a.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default About;
