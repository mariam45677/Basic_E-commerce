import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Product from "./product";

function ProductDetails(){
    const api_url = "http://fakestoreapi.com/products";
    const [product,setproduct] = useState({});
    const params = useParams();
    console.log(params);
    useEffect(() =>{
        fetch(`${api_url}/${params.productId}`)
        .then((res) =>res.json())
      .then((product)=>setproduct(product));
    });
   
    return(
        <Product product={product} showButton={false} />
    );
}
export default ProductDetails;