import React, { useState } from "react";
import GetUsers from "../../GetUsers";
import Banner from "./Banner";
import Product from "./Product";
import AddReviewes from "../Dashboard/AddReviwes";
import Stats from "./Stats";
import Review from "./Review";
import { CircularProgress } from "@mui/material";
import { motion } from "framer-motion";

function Home() {
  const [cart, setCart] = useState([]);
  const [Products, isLoading, refetch] = GetUsers();
  const handleAddToCart = (data) => {
    const newCart = [...cart, data];
    setCart(newCart);
  };
  if (isLoading) {
    return (
      <div className="min-h-[90vh] flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  }
  return (
    <motion.div
      // transition={{ duration: 0.75 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
      className=""
    >
      <Banner />
      <h1 className="text-center my-8 text-3xl font-semibold">Top Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Products?.map((product) => (
          <div className="my-5 mx-auto" key={product._id}>
            {" "}
            <Product product={product} cart={cart} handle={handleAddToCart} />
          </div>
        ))}
      </div>
      <div className="">
        <Stats />
        <Review />
      </div>
    </motion.div>
  );
}

export default Home;
