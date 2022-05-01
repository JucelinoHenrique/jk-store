import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/home";
import LoginJk from "./pages/login";
import Header from "./componets/header";
import Products from "./pages/Products";

const PriveteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

const RoutesApp = () => {
  const { isAuthenticated } = useSelector((state) => state.login);

  if (isAuthenticated) {
    return (
      <div>
        <Header />
        <PriveteRoutes />
      </div>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<LoginJk />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default RoutesApp;
