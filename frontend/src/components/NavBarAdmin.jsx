import React from "react";
import { Link } from "react-router-dom";

function NavBarAdmin() {
  return (
    <div className="h-screen flex bg-black text-white w-60 pl-5 flex-col items-left pt-40">
      <div className="pb-8">
        <h1 className="font-bold text-2xl">Tableau de bord</h1>
      </div>
      <div className="pl-10">
        <div className="pt-4">
          <Link to="/admin"> Oeuvres </Link>
        </div>
        <div className="pt-4">
          <Link to="/admin/articles"> Articles </Link>
        </div>
        <div className="pt-4">
          <Link to="/admin/biography"> Biographie </Link>
        </div>
        <div className="pt-4">
          <Link to="/admin/categories"> Catégories </Link>
        </div>
        <div className="pt-4">
          <Link to="/admin/techniques"> Techniques </Link>
        </div>
        <div className="pt-4">
          <Link to="/admin/users"> Utilisateurs </Link>
        </div>
        <div className="pt-4">
          <Link to="/admin/about"> A propos </Link>
        </div>
      </div>
      <div className="pt-80 pr-4">
        <Link to="/" className="flex bg-white p-3 text-xl text-black">
          <img
            className="h-6 pr-2"
            src="https://cdn2.iconfinder.com/data/icons/system-interface/72/Quit-256.png"
            alt="logo_deconnexion"
          />
          Déconnexion{" "}
        </Link>
      </div>
    </div>
  );
}

export default NavBarAdmin;
