import React from "react";
import Banner from "./Banner";
import Product from "./Product";
import Products from "./Product-details";
import Stats from "./Stats";

function Home() {
  return (
    <div className="">
      <Banner />
      <h1 className="text-center my-8 text-3xl font-semibold">Top Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Products.map((product) => (
          <div className="my-5 mx-auto" key={product._id}>
            {" "}
            <Product product={product} />
          </div>
        ))}
      </div>
      <div className="">
        <Stats />
      </div>
    </div>
  );
}

export default Home;
