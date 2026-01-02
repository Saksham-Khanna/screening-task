import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductRow from "../components/ProductRow";
import Footer from "../components/Footer";
import { getProducts } from "../api/productApi";
import { adaptProduct } from "../adapters/productAdapter";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data.map(adaptProduct));
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <ProductRow title="Trending Deals" products={products} />
      <Footer />
    </>
  );
};

export default Home;
