import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import ProductsAll from "../components/ProductsAll";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    setProducts(data.data);
  }, [data]);

  return (
    <div>
      <Banner/>
      <ProductsAll products={products} />
    </div>
  );
};

export default Home;
