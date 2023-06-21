import React from "react";
import { Link } from "react-router-dom";

function NavBarUser() {
  return (
    <div>
      <Link to="/">HomePage</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/author">Author</Link>
      <Link to="/about">About</Link>
      <Link to="/favourites">Your favourites</Link>
    </div>
  );
}

export default NavBarUser;
