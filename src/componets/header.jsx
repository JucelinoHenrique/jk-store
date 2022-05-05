import React from "react";
import NavBar from "./navBar";
import "../css/header.css";
import { Button } from "../styles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-header">
      <div className="wrapper-logo">
        <h1 className="logo"><Link to="/">Clothes Store</Link></h1>
      </div>
      <div className="wrapper-pages">
        <NavBar />
      </div>
      <div className="wrapper-users">
        <Button style={{ marginRight: 10 }}><Link to="/shoppingCart">carrinho</Link></Button>
        <Button><Link style={{padding: 20}} to="/login">Login</Link></Button>
      </div>
    </div>
  );
};

export default Header;
