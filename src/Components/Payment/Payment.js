import { Numbers } from "@mui/icons-material";
import { Button, CircularProgress, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../Firebase.init";
function Payment() {
  const navigate = useNavigate();
  const params = useParams();
  const [Products, setProducts] = useState({});
  useEffect(() => {
    fetch(`https://still-garden-76565.herokuapp.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const [user, loading, error] = useAuthState(auth);
  const [quantity, setQuantity] = useState(`${params.qty}`);
  const [address, setAddress] = useState("");
  const [zip, setzip] = useState("");

  console.log(Products);
  const Data = {
    name: user.displayName,
    email: user.email,
    name: user.displayName,
    address,
    zip,
    qty: quantity,
    id: params.id,
    product: Products.name,
    paid: false,
  };
  if (loading) {
    return (
      <div className="min-h-[90vh] flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  }
  // handling qty
  const handleqty = (e) => {
    setQuantity(e.target.value);
  };
  // handling submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://still-garden-76565.herokuapp.com/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire("Success!", "Order Placed Succesfully", "success");
          navigate(`/myOrder/${user?.email}`);
        }
        if (!data.acknowledged) {
          Swal.fire("Error!", `You Previously have a order`, "error");
        }
      });
  };
  const stock = Number(Products.countInStock) <= Number(quantity);
  console.log(stock);

  // alert on stock
  if (stock) {
    Swal.fire(
      ` Available Products : ${Products.countInStock}`,
      `You have choosed more than our stock`,
      "error"
    );
  }
  return (
    <div className="">
      <h1 className="text-xl font-semibold text-center my-5">SHIPPING</h1>
      <form
        onSubmit={handleSubmit}
        className="my-shadow w-[90%] lg:w-[70%] bg-white p-5 mx-auto rounded "
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            <div className="my-10 w-full text-center">
              <div className="text-left lg:mx-12 mx-8 font-semibold">Email</div>
              <Input
                style={{ width: "80%" }}
                placeholder="Type your Email"
                value={user.email}
                disabled={user ? true : false}
              />
            </div>
            <div className="mb-10 w-full text-center">
              <div className="text-left lg:mx-12 mx-8 font-semibold">Name</div>
              <Input
                style={{ width: "80%" }}
                placeholder="Type your Full Name"
                value={user.displayName}
              />
            </div>
            <div className="mb-10 w-full text-center">
              <div className="text-left lg:mx-12 mx-8 font-semibold">
                Address
              </div>
              <Input
                style={{ width: "80%" }}
                placeholder="Type your Address"
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="mb-10 w-full text-center">
              <div className="text-left lg:mx-12 mx-8font-semibold">
                Phone Number
              </div>
              <Input
                style={{ width: "80%" }}
                placeholder="Phone"
                onChange={(e) => setzip(e.target.value)}
                required
              />
            </div>
            <div className="mb-10 w-full text-center">
              <div className="text-left lg:mx-12 mx-8 font-semibold">
                Quantity
              </div>
              <Input
                style={{ width: "80%" }}
                value={quantity}
                onChange={handleqty}
              />
            </div>
          </div>
          <div className="">
            <div className="my-10">
              <img
                src={Products.image}
                alt=""
                className="w-[70%] mx-auto rounded-lg shadow-md"
              />
            </div>
            <div className="my-10 w-full text-center">
              <div className="text-left lg:mx-12 mx-8 font-semibold">
                Product Name
              </div>
              <Input
                style={{ width: "80%" }}
                placeholder="Type your Email"
                value={Products.name}
                disabled={user ? true : false}
              />
            </div>
            <div className="mb-10 w-full text-center">
              <div className="text-left lg:mx-12 mx-8 font-semibold">
                Total Price
              </div>
              <Input
                style={{ width: "80%" }}
                placeholder="Type your Email"
                value={`${(Number(Products.price) * Number(quantity)).toFixed(
                  2
                )} $`}
                disabled={user ? true : false}
              />
            </div>
          </div>
        </div>
        <div className="mb-5 mx-8">
          <Button type="submit" variant="contained" disabled={stock}>
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Payment;
