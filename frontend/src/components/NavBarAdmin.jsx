import React from "react";
import { Link } from "react-router-dom";

function NavBarAdmin() {
  return (
    <div>
      <h1> Page Admin </h1>
      <Link to="/admin"> Oeuvres </Link>
      <Link to="/admin/articles"> Articles </Link>
      <Link to="/admin/biography"> Biographie </Link>
      <Link to="/admin/categories"> Catégories </Link>
      <Link to="/admin/techniques"> Techniques </Link>
      <Link to="/admin/users"> Utilisateurs </Link>
      <Link to="/admin/about"> A propos </Link>
      <Link to="/"> Bouton Déconnexion </Link>
    </div>
  );
}

export default NavBarAdmin;
