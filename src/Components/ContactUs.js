import CntactUs from "./Images/Contact.png";
import { Link } from "react-router-dom";
import "./ContactUs.css";

function ContactUS() {
  return (
    <>
      <div className="main pt-5 pb-5 text-sm-center text-md-start">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="conent text-light pt-3">
                <h2>Contact us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
             <div className="btn pb-5">
             <Link to="/about">about Us</Link>
             </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="img-box pt-3">
                <img src={CntactUs} alt="Contact us" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Info">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="crd mb-5">
                <h2>Phone</h2>
                <span>01028712705</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="crd mb-5">
                <h2>E-mail</h2>
                <span><a href=" mailto:mrefaay271@gmail.com">mrefaay271@gmail.com</a></span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="crd mb-5">
                <h2>Location</h2>
                <span>Benha</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactUS;
