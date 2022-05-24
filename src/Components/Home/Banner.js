import { Button } from "@mui/material";
import React from "react";
import Products from "./Product-details";

function Banner() {
  const Data = Products;
  return (
    <div
      style={{
        background:
          'url("https://wonderfulengineering.com/wp-content/uploads/2013/11/factory-wallpaper-5-1024x640.jpg")',
      }}
      className="min-h-[80vh] m-5 rounded-lg"
    >
      <div className="w-full h-full bg-[#00000066] flex flex-col justify-center items-center min-h-[80vh] rounded-md my-shadow">
        <div className="  z-50 font-extrabold text-3xl lg:text-4xl text-white text-center">
          Welcome To Product manufacturer website
        </div>
        <div className="text-center mt-12 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolore
          maiores, impedit earum repudiandae ipsa.
        </div>
        <div className="z-40 pt-24">
          <Button
            color="secondary"
            variant="contained"
            size="large"
            style={{
              minWidth: "150px",
              minHeight: "50px",
              background: "#f50057",
            }}
          >
            Explore Products
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
