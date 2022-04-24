import React from "react";
import {Link} from "react-router-dom"
import "../css/navBar.css"

const NavBar = ()=>{
    return(
        <div className="container-nav">
            <ul className="list-page">
                <li><Link to="/">Home</Link></li>
                <li><Link to="clothes">Roupas</Link></li>
                <li><Link to="outros">Outros</Link></li>
            </ul>
        </div>
    )
}


export default NavBar;