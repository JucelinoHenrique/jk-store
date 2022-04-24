import React from "react";
import FilterProductsMens from "../componets/clothesMens";
import FilterProductsWomen from "../componets/clothesWomen";


const Clothes = ()=>{  
    return(
        <div className="container-products">
           <FilterProductsMens/>
           <FilterProductsWomen/>
        </div>
    )
}


export default Clothes;