import Slider from "./Slider";
import ProductsList from "./ProductsList";
import About from "./About";
import Contact from "./Contact";
import OurProducts from "./ourProducts";

function Home(){
   
    return(
        <>

        <Slider/>
        <OurProducts/>
        <About/>
        <Contact/>
        </>
    );
}
export default Home;