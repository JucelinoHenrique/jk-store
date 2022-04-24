import React from "react";
import { Products } from "../componets/showProducts";
import "../css/home.css"
import women from "../Images/women2.png"
const Home = ()=>{
    return(
        <div className="container-home">
            <div className="container-section1">
                <div className="container-titles">
                    <h1 className="title">NOVAS SENSAÇÕES DO VERÃO</h1>
                    <p className="description">
                    A Clothes Store esta sempre por dentro da moda. Venha e aproveite!!
                    </p>
                </div>
                <div className="container-image">
                    <img src={women} alt="" />
                </div>
            </div>
            <Products/>
        </div>
    )
}


export default Home;