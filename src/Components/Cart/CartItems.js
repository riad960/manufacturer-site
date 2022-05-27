import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CartItems({ item, removeFromCart }) {
  const navigate = useNavigate();
  const [qty, setQty] = useState(0);
  const Total = [];
  const handleQty = (e, id) => {
    setQty(e.target.value);
    const order = {
      id: id,
      qty: qty,
    };
    Total.push(order);
    console.log(Total);
  };
  const redirectToBuy = () => {
    navigate(`/product/${item._id}`);
  };
  return (
    <div
      className="my-shadow flex mx-auto p-5 bg-white rounded-md items-center my-5 w-[80%] md:w-[35%]
    md:mx-auto relative pt-10 pb-20"
    >
      <div className="my-shadow w-10 md:w-16 md:h-16 h-10 rounded-full   ">
        <img
          src={item?.image}
          alt=""
          className="w-full h-full object-cover rounded-full md:ring-4 ring-2 ring-offset-2 ring-[#f50057] "
        />
      </div>
      <div className=" pl-3 ">{item?.name} </div>
      <div className="px-2 py-2 ">
        <Box sx={{ minWidth: 100 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
            <Select
              onBlur={(e) => handleQty(e, item._id)}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Quantity"
            >
              {[...Array(item?.countInStock).keys()].map((item) => (
                <MenuItem key={item + 1} value={(item + 1) * 5}>
                  {(item + 1) * 5}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>
      {/* delete button  */}
      <div className="absolute right-0 top-0">
        <Button
          onClick={() => removeFromCart(item._id)}
          variant="contained"
          size="small"
          style={{ background: "#f50057" }}
        >
          <DeleteIcon />
        </Button>
      </div>
      <div className="absolute right-0 bottom-5 w-full text-center ">
        <Button
          variant="contained"
          style={{ width: "80%" }}
          onClick={redirectToBuy}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
}

export default CartItems;
