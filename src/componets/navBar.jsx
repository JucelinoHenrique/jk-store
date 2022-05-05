import React from "react";
import { Link } from "react-router-dom";
import "../css/navBar.css";

const NavBar = () => {
  return (
    <div className="container-nav">
      <ul className="list-page">
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="products">Categorias</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
