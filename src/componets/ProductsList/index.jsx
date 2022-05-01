import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/productsSlice";
import { ContainerFull } from "../../styles";
import TabMenu from "../TabMenu";

export default function ProductsList() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const { products: product, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

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

  return (
    <ContainerFull>
      <TabMenu
        tabs={categories}
        onChangeTab={(category) => setCategoryFilter(category)}
      />
      {filteredProducts?.map((product) => (
        <div className="container-card" key={product.id}>
          <div className="container-imageCard">
            <img src={product.image} />
          </div>
          <div className="container-info">
            <h4 className="name-produtcs">{product.title}</h4>
            <h5 className="price">R$-{Number(product.price)}</h5>
          </div>
          <div className="container-buttonCart">
            <button className="button-addCart">Adicionar</button>
          </div>
        </div>
      ))}
    </ContainerFull>
  );
}
