import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Swal from "sweetalert2";

const fetchUsers = async () => {
  try {
    const Fetch = await fetch(
      "https://still-garden-76565.herokuapp.com/products"
    );
    const data = await Fetch.json();
    return data;
  } catch (error) {
    throw Error("Unable to fetch Products");
  }
};
function GetUsers() {
  const { data, error, isLoading, refetch } = useQuery("products", fetchUsers, {
    onError: (error) => {
      Swal.fire("Success!", `${error.message}`, "error");
    },
  });
  return [data, isLoading, refetch];
}

// function GetUsers() {
//   const [product, setProduct] = useState([]);
//   useEffect(() => {
//     fetch("https://still-garden-76565.herokuapp.com/products")
//       .then((res) => res.json())
//       .then((data) => setProduct(data));
//   }, []);
//   return product;
// }

export default GetUsers;
