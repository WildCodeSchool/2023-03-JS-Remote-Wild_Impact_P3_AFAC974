import React from "react";
import { Link } from "react-router-dom";
import ImageCard from "./ImageCard";

function Footer() {
  return (
    <div className="flex bg-pink static bottom-0 w-full">
      <Link
        to="https://www.departement974.fr"
        className="m-auto text-white font-bold"
      >
        <ImageCard
          cls="w-20 h-10"
          src="logo_departement_reunion.png"
          alt="logo_déparement_de_la_Réunion"
        />
      </Link>
      <Link
        to="https://capeline974.re/CAPELINE/CARTOTHEQUE/capeline-accueil.html"
        className="m-auto text-white font-bold"
      >
        AFAC 974
      </Link>
      <Link
        to="https://museo.vandanjon.com/index.php/en/"
        className="m-auto text-white font-bold"
      >
        Objet Témoin
      </Link>
      <Link
        to="https://www.ihoi.org/app/photopro.sk/ihoi_icono/?"
        className="m-auto text-white font-bold"
      >
        IHOI
      </Link>
      <Link
        to="https://www.facebook.com/pedagolab"
        className="m-auto text-white font-bold"
      >
        <ImageCard cls="w-8 h-8" src="logo_facebook.png" alt="logo_facebook" />
      </Link>
    </div>
  );
}

export default Footer;
