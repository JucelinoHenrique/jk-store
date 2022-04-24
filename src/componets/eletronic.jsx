import React from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getProducts } from "../features/products/productsSlice";

const FilterEletronic = ()=>{
    const dispath = useDispatch()
    const {products} = useSelector(state => state.products)
    useEffect(()=>{
     dispath(getProducts())
  },[])
 
  const EletronicFilter = products.filter((products)=> products.category === "electronics"  )


  return(
      <div>
          <h1>Aparelho eletrônicos</h1>
          <hr />
            <div className="container-cards" >
                        {EletronicFilter.map((products)=>{
                    return(
                        <div className="container-card" key={products.id}>
                            <div className="container-imageCard">
                                <img src={products.image} />
                            </div>
                            <div className="container-info">
                                <h4 className="name-produtcs">{products.title}</h4>
                                <h5 className="price">R$-{Number(products.price)}</h5>
                            </div>
                            <div className="container-buttonCart">
                                <button className="button-addCart">
                                    Adicionar
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
      </div>
  )

}


export default FilterEletronic;