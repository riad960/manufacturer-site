import React, { useEffect, useState } from "react";

function GetUsers() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return product;
}

export default GetUsers;
