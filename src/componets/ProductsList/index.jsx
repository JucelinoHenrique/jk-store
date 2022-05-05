import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/products";
import { ContainerFull } from "../../styles";
import {ButtonAdd,ContainerInfo,ContainerCard,ContainerImageCard, ContainerCards} from "../../pages/style/styles";
import { addProduct } from "../../store/shoppingCart";
import TabMenu from "../TabMenu";

export default function ProductsList() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const { products: product, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const isLoading = status === "loading";

  useEffect(() => {
    if (status === "success") {
      const categories = product.map((products) => {
        return products.category;
      });

      setCategories([...new Set(categories)] || []);
    }
  }, [status, product]);

  const filteredProducts = product.filter((products) => {
    if (categoryFilter) {
      return products.category === categoryFilter;
    }
    return true;
  });

  if (isLoading) {
    return (
      <ContainerFull>
        <div>Carregando...</div>;
      </ContainerFull>
    );
  }

  const addProd = (product) => {
    dispatch(addProduct(product));
  };




  return (
    <ContainerFull>
      <TabMenu
        tabs={categories}
        onChangeTab={(category) => setCategoryFilter(category)}
      />
      <ContainerCards>
      {filteredProducts?.map((product) => (
         <ContainerCard key={product.id}>
         <ContainerImageCard>
           <img src={product.image}  alt={product.title}/>
         </ContainerImageCard>
         <ContainerInfo>
           <h4>{product.title}</h4>
           <h5>R$ {Number(product.price)}</h5>
         </ContainerInfo>
           <ButtonAdd onClick={() =>addProd(product)}>
             Adicionar
           </ButtonAdd>

       </ContainerCard>
     
      ))}
    </ContainerCards>
    </ContainerFull>
  );
}
