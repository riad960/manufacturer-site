import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Rating,
  Select,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import ArrowCircleLeftSharpIcon from "@mui/icons-material/ArrowCircleLeftSharp";
import { CartContext } from "../Cart/CartContext";

function ProductDetails() {
  const [Products, setProducts] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // declaring varriable
  const [cartItems, setCartItems] = useContext(CartContext);
  const [qty, setQty] = useState(0);
  const params = useParams();
  const navigate = useNavigate();

  //  handle add to cart
  const addToCartHandler = () => {};
  const handleQty = (e) => {
    setQty(e.target.value);
  };
  return (
    <div className="container">
      <div className="mx-2 my-3">
        <Button
          as={Link}
          to="/"
          variant="contained"
          style={{ background: "#f50057", padding: "10px 15px" }}
          startIcon={<ArrowCircleLeftSharpIcon />}
        >
          Go Back
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="my-shadow m-5">
          <img src={Products?.image} className="w-full object-cover" alt="" />
        </div>
        <div className="m-5 grid grid-cols-1 md:grid-cols-2">
          <Paper>
            <h1 className=" text-xl md:text-2xl text-center py-3 font-semibold border-b-2 ">
              {Products?.name}
            </h1>
            <h2 className=" font-semibold px-3 py-2  border-b-2">
              {" "}
              Price: ${Products?.price}
            </h2>
            <h2 className=" font-semibold px-3 py-2 border-b-2">
              Description : ${Products?.description}
            </h2>
            <h2 className=" font-semibold px-3 py-2 ">
              <Typography style={{ fontWeight: 600 }} component="legend">
                Rating : {Products?.rating}
              </Typography>
              <Rating
                name="half-rating-read"
                defaultValue={Products.rating}
                precision={0.5}
                readOnly
              />
            </h2>
          </Paper>
          {/* product details status  */}
          <div className="m-5 ">
            <Paper>
              <h2 className=" font-semibold px-3 py-2  border-b-2 grid grid-cols-2">
                <div>Price :</div> <div>{Products?.price}</div>
              </h2>
              <h2 className=" font-semibold px-3 py-2  grid grid-cols-2">
                <div>Status :</div>{" "}
                <div>
                  {Products?.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                </div>
              </h2>
              <div className="grid grid-cols-2">
                <div className="font-semibold px-3 py-2">Quantity : </div>
                <div className="px-5 py-2 ">
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        {qty}
                      </InputLabel>
                      <Select
                        onChange={handleQty}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Quantity"
                      >
                        {[...Array(Products?.countInStock).keys()].map(
                          (item) => (
                            <MenuItem key={item + 1} value={(item + 1) * 5}>
                              {(item + 1) * 5}
                            </MenuItem>
                          )
                        )}
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
              <div className="flex text-center justify-center py-2">
                <Button
                  as={Link}
                  to={`/payment/${params.id}/${qty}`}
                  variant="contained"
                  onClick={addToCartHandler}
                  disabled={Products?.countInStock === 0}
                  style={{ width: "90%" }}
                >
                  Order now
                </Button>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
