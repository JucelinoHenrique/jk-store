import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LoginJk from "./pages/login";
import Header from "./componets/header";
import Products from "./pages/Products";
import { ShoppingCart } from "./pages/shoppingCart";
import { About } from "./pages/about";
const RoutesApp = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/login" element={<LoginJk />} />
      </Routes>
    </div>
  )


};

export default RoutesApp;
