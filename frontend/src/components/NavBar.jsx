import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/">HomePage</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/author">Author</Link>
      <Link to="/about">About</Link>
      <Link to="/favorites">Your favorites</Link>
    </div>
  );
}

export default NavBar;
