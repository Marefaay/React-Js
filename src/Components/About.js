import "./about.css";
import AboutImg from "./Images/about.png"
import { Link } from "react-router-dom";
import ContactUS  from "./ContactUs";
function About() {
  return (
    <div className="About">
      <div className="about-heading text-center text-capitalize text-light pt-3">
        <h3>About Us</h3>
        <p className="fs-6 ">We are the oldest company in e-commwrce field</p>
        <span></span>
      </div>
      <div className="about-main">
    <div className="container">
    <div
       className="row align-items-center">
         <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="content  text-sm-center text-md-start text-light">
            <div className="container">
              <h2>ELMATGR</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="img-conent ">
        <img src={AboutImg} alt="About img" className="img-fluid "/>
        </div>
        </div>
       </div>
    </div>
      </div>
    </div>
  );
}
export default About;
