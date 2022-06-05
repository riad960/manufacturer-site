import { Button, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddItems = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [qty, setQty] = useState(0);
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState();
  const item = {
    name: name,
    image: image,
    description: description,
    countInStock: qty,
    rating: rating,
    price: price,
  };
  // setting value for the state
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleImg = (e) => {
    setImage(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(Number(e.target.value));
  };
  const handleQty = (e) => {
    setQty(Number(e.target.value));
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleRating = (e) => {
    setRating(Number(e.target.value));
  };
  // handling submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // fetching
    fetch("https://still-garden-76565.herokuapp.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire("Success!", "Item Added Succesfully", "success");
          navigate("/manageItems");
        }
      });
  };
  return (
    <div className="flex min-h-[80vh] items-center justify-center mt-7">
      <div className="my-shadow w-96 mx-5 bg-white rounded">
        <h1 className="text-center text-2xl font-semibold mt-5">Add Items</h1>
        <form
          className="m-5 flex items-center flex-col"
          onSubmit={handleSubmit}
        >
          <div className="mb-10 w-full text-center">
            <Input
              required
              style={{ width: "80%" }}
              placeholder="Product Name"
              onBlur={handleName}
            />
          </div>
          <div className="mb-10 w-full text-center">
            <Input
              required
              type="number"
              style={{ width: "80%" }}
              placeholder="Price"
              onBlur={handlePrice}
            />
          </div>
          <div className="mb-10 w-full text-center">
            <Input
              required
              style={{ width: "80%" }}
              placeholder="Image URL"
              onBlur={handleImg}
            />
          </div>
          <div className="mb-10 w-full text-center">
            <Input
              required
              type="number"
              style={{ width: "80%" }}
              placeholder="Product Quantity"
              onBlur={handleQty}
            />
          </div>
          <div className="mb-10 w-full text-center">
            <Input
              required
              style={{ width: "80%" }}
              placeholder="Rating"
              onBlur={handleRating}
            />
          </div>
          <div className="mb-10 w-full text-center">
            <TextField
              required
              multiline
              rows={4}
              style={{ width: "80%" }}
              placeholder="Add Product Details"
              onBlur={handleDescription}
            />
          </div>
          <div className="mb-5">
            <Button type="submit" variant="contained">
              Add Item
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
