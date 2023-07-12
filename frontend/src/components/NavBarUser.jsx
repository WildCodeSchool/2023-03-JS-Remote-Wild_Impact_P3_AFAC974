import React from "react";
import { Link } from "react-router-dom";
import user from "../assets/user.svg";
import logo from "../assets/logo.png";

function NavBarUser() {
  return (
    <div className="pt-2 pl-10">
      <ul className="flex justify-between items-center">
        <img className="h-20" src={logo} alt="logo" />
        <div className="flex gap-5">
          <Link to="/">Accueil</Link>
          <Link to="/gallery">Gallerie</Link>
          <Link to="/author">Biographie</Link>
          <Link to="/about">A propos</Link>
        </div>
        <div className="flex items-center pr-10">
          <img className="h-6 pr-4" src={user} alt="user" />
          <Link className="pt-1" to="/favourites">
            Connexion
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default NavBarUser;
