import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../store/products";
import "../css/products.css";
import { addProduct } from "../store/shoppingCart";
import {ButtonAdd,ContainerInfo,ContainerCard,ContainerProducts,ContainerCards,ContainerImageCard} from "../pages/style/styles";

export const Products = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const addProd = (product) => {
    dispatch(addProduct(product));
  };

  return (
    <ContainerProducts >
      <h1> Todos os produtos</h1>
      <ContainerCards>
        {products.map((products) => {
          return (
            <ContainerCard key={products.id}>
              <ContainerImageCard>
                <img src={products.image}  alt={products.title}/>
              </ContainerImageCard>
              <ContainerInfo>
                <h4>{products.title}</h4>
                <h5>R$ {Number(products.price)}</h5>
              </ContainerInfo>
                <ButtonAdd onClick={() => addProd(products)}>
                  Adicionar
                </ButtonAdd>
  
            </ContainerCard>
          );
        })}
      </ContainerCards>
    </ContainerProducts>
  );
};
