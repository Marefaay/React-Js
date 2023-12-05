import img1 from "./Images/Slidr-image1.jpg";
import img2 from "./Images/Slider-Image2.jpg";
import img3 from "./Images/Slider-Image3.jpg";
import img4 from "./Images/R.jpg";
import "./Slider.css";
import {Link} from"react-router-dom"


function Slider() {
  return (
    <>
      <div 
        id="carouselExampleIndicators"
        className="carousel slide mt-5 h-75 position-relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active "
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="overlay"></div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block h-500 w-100 dark" alt="..." />
            <div className="txt position-absolute top-25 text-center">
            <h2 className=" fw-bold  ">
              ELMATGR Is A Good Place to Buy Products
            </h2>
            <p className="w-50 ms-25 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <Link to="/Products"> Buy Now</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block h-500 w-100 dark" alt="..." />
            <div className="txt position-absolute top-25 text-center">
            <h2 className=" fw-bold  ">
              ELMATGR Is A Good Place to Buy Products
            </h2>
            <p className="w-50 ms-25 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <Link to="/Products"> Buy Now</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block h-500 w-100  " alt="..." />
            <div className="txt position-absolute top-25 text-center">
            <h2 className=" fw-bold  ">
              ELMATGR Is A Good Place to Buy Products
            </h2>
            <p className="w-50 ms-25 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <Link to="/Products"> Buy Now</Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next z-5"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
export default Slider;
