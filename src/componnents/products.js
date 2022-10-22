import React, { useEffect, useState } from "react";
import Product from "./product";
import './product.css';
function Products(){
  const api_url = "http://fakestoreapi.com/products"
  const [products,setproducts] = useState([]);
  useEffect(() =>{
    fetch(api_url).then((res) =>res.json())
    .then((data)=>setproducts(data));
  })

    return(
        <React.Fragment>
            <h2 className="title">Our Product</h2>
            <div className="container">
                <div className="row">
                  {products.map((product) =>{
                    return(
                      
            <div className="col-3" >
            <Product product ={product}></Product>
            </div>




                      
                    )
                  })}

</div>

            </div>

        </React.Fragment>

    )
}
export default Products;