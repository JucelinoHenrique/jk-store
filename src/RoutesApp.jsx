import React from "react";
import {Routes,Route} from "react-router-dom"
import { useSelector } from 'react-redux';
import Home from "./pages/home";
import LoginJk from "./pages/login";
import Clothes from "./pages/clothes";
import OthersProducts from "./pages/othersProducts";
import Header from "./componets/header";

const PriveteRoutes = ()=>{
    return(
       <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="clothes" element={<Clothes/>}/>
           <Route path="outros" element={<OthersProducts/>}/>
       </Routes>
    )
}


const RoutesApp = ()=>{
   const {isAuthenticated} = useSelector((state)=> state.login)  
   console.log(isAuthenticated)
   if(isAuthenticated){

       return (
        <div>
       <Header/>
       <PriveteRoutes/>
       </div>
       )     
   }
    return(
       <Routes>
         <Route path="/" element={<LoginJk/>}/>
       </Routes>
   )

}


export default RoutesApp;