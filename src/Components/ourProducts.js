import { Link } from "react-router-dom";
import Electronis from "./Images/electornics.jpeg";
import Jewelery from "./Images/Jewelery.jpeg";
import Mens from "./Images/mens.jpeg";
import Womens from "./Images/womens.jpeg";
import "./ourproducts.css"
function OurProducts() {
  return (
    <div className="Products mt-2 mb-2">
      <div className="container">
      <div className="products-heading text-center text-capitalize text-light pt-3">
        <h3>Our products</h3>
        <p className="fs-6 ">We Have a collection of products that  you need it</p>
        <span className="mb-4"></span>
      </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="Product-conent mt-2 mb-2">
              <div className="img-box">
                <img src={Electronis} alt="Electornics" className="img-fluid" />
              </div>
              <div className="ovrlay text-center  text-light">
                <h2 className="mt-5 mb-3">Electonices</h2>
                <Link to="/Products" >Product</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="Product-conent mt-2 mb-2">
              <div className="img-box">
                <img src={Jewelery} alt="Electornics" className="img-fluid" />
              </div>
              <div className="ovrlay text-center  text-light">
                <h2 className="mt-5 mb-3">Jewlery</h2>
                <Link to="/Products" >Product</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="Product-conent mt-2 mb-2">
              <div className="img-box">
                <img src={Mens} alt="Electornics" className="img-fluid" />
              </div>
              <div className="ovrlay text-center  text-light">
                <h2 className="mt-5 mb-3">Men's Clothes</h2>
                <Link to="/Products" >Product</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="Product-conent mt-2 mb-2">
              <div className="img-box">
                <img src={Womens} alt="Electornics" className="img-fluid" />
              </div>
              <div className="ovrlay text-center  text-light">
                <h2 className="mt-5 mb-3">Women's Clothes</h2>
                <Link to="/Products" >Product</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurProducts;
