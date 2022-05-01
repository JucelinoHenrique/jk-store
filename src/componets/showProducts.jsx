import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../store/productsSlice";
import "../css/products.css";

export const Products = () => {
  const dispath = useDispatch();

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispath(getProducts());
  }, []);

  return (
    <div className="container-products">
      <h1> Todos os produtos</h1>
      <div className="container-cards">
        {products.map((products) => {
          return (
            <div className="container-card" key={products.id}>
              <div className="container-imageCard">
                <img src={products.image} />
              </div>
              <div className="container-info">
                <h4 className="name-produtcs">{products.title}</h4>
                <h5 className="price">R$-{Number(products.price)}</h5>
              </div>
              <div className="container-buttonCart">
                <button className="button-addCart">Adicionar</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
