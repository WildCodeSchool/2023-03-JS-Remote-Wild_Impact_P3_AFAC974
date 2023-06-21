import React from "react";
import { Link } from "react-router-dom";

function NavBarAdmin() {
  return (
    <div className="h-screen flex bg-black text-white w-60 pl-10 flex-col items-left pt-40">
      <div className="pb-8">
        <h1 className="font-bold">Tableau de bord</h1>
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
      <div className="pt-80">
        <Link to="/"> Déconnexion </Link>
      </div>
    </div>
  );
}

export default NavBarAdmin;
