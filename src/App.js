import Navbar from "./componnents/nav_bar";
import Products from "./componnents/products";
import Slider from "./componnents/slider";
import { Routes, Route} from "react-router-dom";
import About from "./componnents/about";
import ProductDetails from "./componnents/ProductDetails";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
      <Route
      path ="/"
      element={
        <>
        <Slider></Slider>
        <Products></Products>
        </>
      }
      />
              <Route path="about" element={<About/>} />
              <Route path="product/:productId" element={<ProductDetails/>} />

      </Routes>
      
     
    </div>
  );
}

export default App;
