import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
import CartItems from "./CartItems";

const Cart = () => {
  const [cartItems, setCartItems] = useContext(CartContext);

  const params = useParams();
  const removeFromCart = (id) => {
    const Deleted = cartItems.filter((item) => item._id != id);
    setCartItems(Deleted);
  };

  console.log(cartItems);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/products/${params.id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCart([...setCart, data]);
  //     });
  // }, []);

  return (
    <div className="min-h-[90vh]">
      <h1 className="text-center my-5 text-xl font-semibold">Shopping cart</h1>
      {cartItems.map((item) => (
        <CartItems key={item._id} item={item} removeFromCart={removeFromCart} />
      ))}
      <CartItems />
    </div>
  );
};

export default Cart;
