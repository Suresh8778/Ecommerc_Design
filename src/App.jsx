import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Navbar from "./assets/Navbar";
import Banner from "./assets/Banner";
import BrandLogo from "./assets/BrandLogo";
import Product from "./assets/Product";
import Offer from "./assets/Offer";
import FavProduct from "./assets/FavProduct";
import Adv from "./assets/Adv";
import Subscribe from "./assets/Subscribe";
import Footer from "./assets/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <BrandLogo />
      <Product />
      <Offer />
      <FavProduct />
      <Adv />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
