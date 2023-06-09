import React from "react";
import { Link, NavLink } from "react-router-dom";
import user from "../assets/user.svg";
import logo from "../assets/logo.png";

function NavBarUser() {
  return (
    <div className="bg-black pt-2 pl-10 text-white">
      <ul className="flex justify-between items-center">
        <NavLink to="/">
          <img className="h-20" src={logo} alt="logo" />
        </NavLink>

        <div className="flex gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text underline underline-offset-8 decoration-4 decoration-purple"
                : ""
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive
                ? "text underline underline-offset-8 decoration-4 decoration-purple"
                : ""
            }
          >
            Galerie
          </NavLink>
          <NavLink
            to="/author"
            className={({ isActive }) =>
              isActive
                ? "text underline underline-offset-8 decoration-4 decoration-purple"
                : ""
            }
          >
            Biographie
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text underline underline-offset-8 decoration-4 decoration-purple"
                : ""
            }
          >
            A propos
          </NavLink>
        </div>
        <div className="flex items-center pr-10">
          <Link className="pt-1" to="/favourites">
            <img className="h-6 pr-4" src={user} alt="user" />
          </Link>
          <Link className="pt-1" to="/auth/connexion">
            Connexion
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default NavBarUser;
