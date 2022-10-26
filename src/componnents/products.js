import React, { useEffect, useState } from "react";
import Product from "./product";
import './product.css';
function Products(){
  const api_url = "http://fakestoreapi.com/products"
  const [products,setproducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const getProducts = () => {
    fetch(api_url).then((res) =>res.json())
    .then((data)=>setproducts(data));
  };
  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  const getProductInCategory = (catName) => {
    console.log(catName);
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  };
  useEffect(() =>{
    getProducts();
    getCategories();
    getProductInCategory();
  }, [])

    return(
        <React.Fragment>
            <h2 className="title">Our Product</h2>
            <div className="container">
            <button
          onClick={() => {
            getProducts();
          }}
          className="btn btn-info"
        >
          All
        </button>
            {categories.map((cat) => {
          return (
            <button
              key={cat}
              onClick={() => {
                getProductInCategory(cat);
              }}
              className="btn btn-info"
            >
              {cat}
            </button>
          );
        })}
                <div className="row">
                  {products.map((product) =>{
                    return(
                      
            <div className="col-3" >
            <Product product ={product} showButton={true} ></Product>
            </div>             
                    )
                  })}

</div>

            </div>

        </React.Fragment>

    )
}
export default Products;