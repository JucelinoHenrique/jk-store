import React from "react";
import FilterJewelery from "../componets/jewelery";
import FilterEletronic from "../componets/eletronic";
const OthersProducts = ()=>{
    return(
        <div className="container-othersProducts">
          <FilterJewelery/> 
          <FilterEletronic/> 
        </div>
    )
}


export default OthersProducts;