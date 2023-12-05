// import logo from './logo.svg';
// import './App.css';
import Navbar from "./Components/Navbar";

import Home  from "./Components/Home";
import { Routes,Route } from "react-router-dom";
// import About  from "./Components/About";
import Footer from "./Components/Footer"
import ContactUS from "./Components/ContactUs";
import AboutPage from "./Components/AboutPage";
import ProductsPage from"./Components/ProductsPage"

function App() {
  return (
    <div className="App">
     
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<AboutPage/>} />
        <Route path="contact" element={<ContactUS/>} />
        <Route path="Products" element={<ProductsPage/>} />
    
      </Routes>
      
      
      <Footer/>
     
    </div>
  );
}

export default App;
