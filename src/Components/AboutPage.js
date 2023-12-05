import "./AboutPage.css";
import AboutImg from "./Images/about.png";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <>
      <div className="about-main pt-5  text-sm-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="content   text-sm-center text-md-start text-light">
                <div className="container">
                  <h2>About Us</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </p>
                  <div className="btn pb-5 ">
                  <Link to="/contact">Contact Us</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="img-conent ">
                <img src={AboutImg} alt="About img" className="img-fluid " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="txt">
        <div className="container">
        <p className="text-center text-light p-3 ">
          Iaculis at erat pellentesque adipiscing commodo elit at imperdiet.
          Imperdiet sed euismod nisi porta lorem. Consequat nisl vel pretium
          lectus. Eu ultrices vitae auctor eu augue. Imperdiet proin fermentum
          leo vel orci porta non pulvinar neque. Dui ut ornare lectus sit amet.
          Elit pellentesque habitant morbi tristique senectus. Diam quam nulla
          porttitor massa id. Vel turpis nunc eget lorem. Metus vulputate eu
          scelerisque felis imperdiet proin fermentum. Amet consectetur
          adipiscing elit duis tristique. Rhoncus mattis rhoncus urna neque.
          Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur
          vitae nunc. Arcu vitae elementum curabitur vitae nunc sed velit. Sed
          ullamcorper morbi tincidunt ornare massa eget egestas.
          adipiscing elit duis tristique. Rhoncus mattis rhoncus urna neque.
          Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur
          vitae nunc. Arcu vitae elementum curabitur vitae nunc sed velit. Sed
          ullamcorper morbi tincidunt ornare massa eget egestas.
          adipiscing elit duis tristique. Rhoncus mattis rhoncus urna neque.
          Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur
          vitae nunc. Arcu vitae elementum curabitur vitae nunc sed velit. 
         
          
        </p>
        </div>
      </div>
    </>
  );
}
export default AboutPage;
