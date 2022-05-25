import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
import CartItems from "./CartItems";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useContext(CartContext);
  const [qty, setQty] = useState(0);
  const params = useParams();

  // useEffect(() => {
  //   fetch(`http://localhost:5000/products/${params.id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCart([...setCart, data]);
  //     });
  // }, []);
  console.log(cartItems);
  const handleQty = (e) => {
    setQty(e.target.value);
  };
  return (
    <div className="min-h-[90vh]">
      <h1 className="text-center my-5 text-xl font-semibold">Shopping cart</h1>
      {cartItems.map((item) => (
        <CartItems key={item._id} item={item} />
      ))}
      <CartItems />
    </div>
  );
};

export default Cart;
