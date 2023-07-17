import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import connexion from "../services/connexion";
import hexa from "../assets/hexa.png";

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
            <div className="flex flex-col">
              <div className="flex" />

              <p className="text-justify ">
                <img
                  className="w-1/2 h-1/2 float-left mr-10 mb-10"
                  src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                    abouts[0].image_src
                  }`}
                  alt="ile paradisiaque"
                />
                {abouts[0].summary}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col text-white ml-20 mt-20">
          <div className="flex pb-5 justify-end">
            <img className="w-10 h-10" src={hexa} alt="logo" />

            <h3 className="mt-2 font-bold text-2xl pb-5">Les partenaires</h3>
          </div>

          <div className="flex pb-5">
            <div className="flex flex-col pb-5">
              <div className="flex" />
              {abouts.slice(1, abouts.length).map((a) => (
                <div className="flex pb-10 mb-5" key={a.id}>
                  <Link to={a.url} className="mr-5">
                    <img
                      className="h-20 mr-2"
                      src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                        a.image_src
                      }`}
                      alt={a.image_alt}
                    />
                  </Link>

                  <div className="flex flex-col">
                    <h4 className="font-bold text-1x1 mb-4">{a.name}</h4>
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
