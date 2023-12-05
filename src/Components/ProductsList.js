import { useEffect, useState } from "react";
import Product from "./Product";

import "./ProductList.css";
function ProductsList() {
  let [products, setProducts] = useState([]);
  let [categories, setCategories] = useState([]);
  //Api link Storder in varibale to use easily later
 
  // To make side effcet
  useEffect(() => {
    
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  console.log(products);
  let getProductInCategory = (cat) => {
    fetch(`https://fakestoreapi.com/products/category/${cat}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };
  console.log(categories);

  
  return (
    <div className="products mt-5 pb-5">
     
      <div className="filters text-center pt-5 pb-3 mt-5  text-center m-auto w-75">
        <div className="row justify-content-center ">
          {categories.map((category) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-12">
                <button
                  id="btn"
                  className="text-capitalize w-100 mt-1 mb-1 pt-2 pb-2  "
                  onClick={() => {
                    getProductInCategory(category);
                  }}
                >
                  {category}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="content ms-3 me-3 pb-5">
        <div className="container">
          <div className="row">
            {products.map((pr) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <Product key={pr.id} pr={pr} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductsList;
