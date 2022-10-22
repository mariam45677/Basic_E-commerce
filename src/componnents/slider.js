import React from "react";
import './slider.css';
function Slider(){
    return(
        <React.Fragment>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div  className="carousel-item active">
      <img src="https://neilpatel.com/wp-content/uploads/2017/12/ecommerce-seo-tips.jpg"  className="d-block w-100 height" alt="..."/>
    </div>
    <div  className="carousel-item">
      <img src="https://media.istockphoto.com/photos/online-shopping-and-payment-man-using-tablet-with-shopping-cart-icon-picture-id1206800961?k=20&m=1206800961&s=612x612&w=0&h=hcPoUKhWtzHXR3PIAHVgPVZDZaO7R8yZ1wNPkUSsgwU="  className="d-block w-100 height" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.redmention.com/wp-content/uploads/2021/06/eCommerce-Website-Components-photo.jpg"  className="d-block w-100 height" alt="..."/>
    </div>
  </div>
  <button  className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span  className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button  className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span  className="carousel-control-next-icon" aria-hidden="true"></span>
    <span  className="visually-hidden">Next</span>
  </button>
</div>
</React.Fragment>

    );
}
export default Slider;