import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContainerCart } from "../styles";
import { ButtonRemove, ContainerInfo, MicroCard, Wrapper, ContainerTotal,ButtonAdd } from "./style/styles";
import { removeProduct } from "../store/shoppingCart";

export const ShoppingCart = () => {

  const shoppingCart = useSelector(state => state.shoppingCart)
  const Dispatch = useDispatch()

  const RemoveProduct = (index) => {
    Dispatch(removeProduct(index))
    console.log(index)
  }




  return (
    <ContainerCart>
      <Wrapper>
        {
          shoppingCart.products?.map((product, index) => {
            return (
              <MicroCard key={index}>
                <img src={product.image} alt={product.title} />
                <ContainerInfo>
                  <h5>{product.title}</h5>
                  <h4>R${Number(product.price)}</h4>
                  <h6>Avaliação:{product.rating.rate}</h6>
                  <ButtonRemove onClick={() => RemoveProduct(index)}>Remover</ButtonRemove>
                </ContainerInfo>
              </MicroCard>

            )
          })}
      </Wrapper>
      <ContainerTotal>
        <h3>CLOTHES STORE</h3>
        <h4>Total:R${shoppingCart?.totalPrice}</h4>
        <ButtonAdd>finalizar pedido</ButtonAdd>
      </ContainerTotal>
    </ContainerCart>
  )

}