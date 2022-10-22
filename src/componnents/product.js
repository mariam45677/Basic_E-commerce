import React from "react";
function Product(props){
    const {product} =props;
    return(
        <React.Fragment>
        <div className="card">
        <img src={product.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary">Go somewhere</button>
        </div>
        </div>
        </React.Fragment>

    )
}
export default Product;