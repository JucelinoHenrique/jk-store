import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContainerFlex, ContainerFlexRow, ContainerFull } from "../styles";
import {ButtonRemove, ContainerInfo, MicroCard } from "./style/styles";
import { removeProduct } from "../store/shoppingCart";

export const ShoppingCart = () => {

  const shoppingCart = useSelector(state => state.shoppingCart)
  console.log(shoppingCart.products)
  const Dispatch = useDispatch()

  const RemoveProduct = (product)=>{
      Dispatch(removeProduct(product))
  }



  return (

    <ContainerFlexRow>

      <ContainerFull>

        {
          shoppingCart.products?.map((product) => {
            return (
              <ContainerFlex >
                <MicroCard key={product.id}>
                  {/* {console.log(product.id)}
                  {console.log(product)} */}
                  <img src={product.image} alt={product.title} />
                  <ContainerInfo>
                    <h5>{product.title}</h5>
                    <p>{product.description}</p>
                  </ContainerInfo>
                  <ContainerFlex>
                  <h4>R${Number(product.price)}</h4>
                  <ButtonRemove onClick={()=> RemoveProduct(product)}>Remover</ButtonRemove>
                  </ContainerFlex>
                </MicroCard>
              </ContainerFlex>
            )
          })}

      </ContainerFull>

        {/* <Wrapper>
          <h4>Total a pagar:</h4>
           
        </Wrapper> */}

    </ContainerFlexRow>
  )

}