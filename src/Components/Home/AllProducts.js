import { CircularProgress } from "@mui/material";
import React from "react";
import GetUsers from "../../GetUsers";
import Product from "./Product";

const AllProducts = () => {
  const [Products, isLoading, refetch] = GetUsers();
  if (isLoading) {
    return (
      <div className="min-h-[90vh] flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="">
      <h1 className="text-center my-8 text-3xl font-semibold">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Products?.map((product) => (
          <div className="my-5 mx-auto" key={product?._id}>
            {" "}
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
