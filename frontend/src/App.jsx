import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Card from "./components/Card";
import FilterSection from "./components/FIlterSection";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [priceFilter, setPriceFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState(0);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await axios.get("http://localhost:5001/products");
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedData();
  }, []);

  const filteredProducts = products
    .filter((p) => {
      if (selectedTitle.trim() !== "") {
        return p.title.toLowerCase().includes(selectedTitle.toLowerCase());
      }
      return true;
    })
    .filter((p) => {
      if (priceFilter.length === 2) {
        const [min, max] = priceFilter;
        return p.price >= min && p.price <= max;
      }
      return true;
    })
    .filter((p) => {
      if (ratingFilter > 0) {
        return p.rating >= ratingFilter;
      }
      return true;
    });

  return (
    <div className='relative font-["Montserrat"] w-full '>
      <div className="fixed z-10 top-0 left-0 right-0">
        <Navbar onSelect={setSelectedTitle} products={products} />
      </div>
      <div className="flex justify-center mt-20  ">
        <Banner />
      </div>
      <div className="sm:pl-20 sm:pr-20 md:pl-25 md:pr-25">
        <FilterSection
          setPriceFilter={setPriceFilter}
          setRatingFilter={setRatingFilter}
        />
        <ProductGrid>
          {filteredProducts.map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </ProductGrid>
      </div>
      {filteredProducts.length === 0 && (
        <div className="flex w-[100%] justify-center text-end font-medium text-xl text-gray-500 ">
          ~~~ NO PRODUCTS ~~~
        </div>
      )}
    </div>
  );
}

export default App;
