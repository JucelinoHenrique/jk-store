import React from "react";
import NavBar from "./navBar";
import "../css/header.css";
import { Button } from "../styles";
const Header = () => {
  return (
    <div className="container-header">
      <div className="wrapper-logo">
        <h1 className="logo">Clothes Store</h1>
      </div>
      <div className="wrapper-pages">
        <NavBar />
      </div>
      <div className="wrapper-users">
        <Button style={{ marginRight: 10 }}>carrinho</Button>
        <Button>Sair</Button>
      </div>
    </div>
  );
};

export default Header;
