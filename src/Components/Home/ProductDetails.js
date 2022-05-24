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
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Products from "./Product-details";
import ArrowCircleLeftSharpIcon from "@mui/icons-material/ArrowCircleLeftSharp";
function ProductDetails() {
  // declaring varriables
  const [qty, setQty] = useState(0);
  const params = useParams();
  const navigate = useNavigate();
  const product = Products.find((e) => e._id === params.id);
  //  handle add to cart
  const addToCartHandler = () => {
    navigate(`/cart/${params.id}?qty=${qty}`);
    console.log(params.id);
  };
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
          <img src={product.image} className="w-full object-cover" alt="" />
        </div>
        <div className="m-5 grid grid-cols-1 md:grid-cols-2">
          <Paper>
            <h1 className=" text-xl md:text-2xl text-center py-3 font-semibold border-b-2 ">
              {product.name}
            </h1>
            <h2 className=" font-semibold px-3 py-2  border-b-2">
              {" "}
              Price: ${product.price}
            </h2>
            <h2 className=" font-semibold px-3 py-2 border-b-2">
              Description : ${product.description}
            </h2>
            <h2 className=" font-semibold px-3 py-2 ">
              <Typography style={{ fontWeight: 600 }} component="legend">
                Rating : {product.rating}
              </Typography>
              <Rating
                name="half-rating-read"
                defaultValue={product.rating}
                precision={0.5}
                readOnly
              />
            </h2>
          </Paper>
          {/* product details status  */}
          <div className="m-5 ">
            <Paper>
              <h2 className=" font-semibold px-3 py-2  border-b-2 grid grid-cols-2">
                <div>Price :</div> <div>{product.price}</div>
              </h2>
              <h2 className=" font-semibold px-3 py-2  grid grid-cols-2">
                <div>Status :</div>{" "}
                <div>
                  {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                </div>
              </h2>
              <div className="grid grid-cols-2">
                <div className="font-semibold px-3 py-2">Quantity : </div>
                <div className="px-5 py-2 ">
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Quantity
                      </InputLabel>
                      <Select
                        onChange={handleQty}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Quantity"
                      >
                        {[...Array(product.countInStock).keys()].map((item) => (
                          <MenuItem key={item + 1} value={(item + 1) * 5}>
                            {(item + 1) * 5}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
              <div className="flex text-center justify-center py-2">
                <Button
                  variant="contained"
                  onClick={addToCartHandler}
                  disabled={product.countInStock === 0}
                  style={{ width: "90%" }}
                >
                  ADD TO CART
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
