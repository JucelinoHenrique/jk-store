import React from "react";
import NavBar from "./navBar";
import "../css/header.css"
const Header= ()=>{
    return(
        <div className="container-header">
            <div className="wrapper-logo">
                <h1 className="logo">Clothes Store</h1>
            </div>
            <div className="wrapper-pages">
               <NavBar/>  
            </div>
            <div className="wrapper-users">
                <button className="btn-cart">
                    carrinho
                </button>
                <button className="btn-logout">Sair</button>
            </div>
        </div>
    )
}

export default Header;

