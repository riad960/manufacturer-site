// const Products = [
//   {
//     name: "Airpods Wireless Bluetooth Headphones",
//     image:
//       "https://github.com/bradtraversy/proshop_mern/blob/721c60ef9cdcabf26817c48ead94ca900173af50/frontend/public/images/airpods.jpg?raw=true",
//     description:
//       "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
//     brand: "Apple",
//     category: "Electronics",
//     price: 89.99,
//     countInStock: 3,
//     rating: 4.5,
//     numReviews: 4,
//   },
//   {
//     name: "iPhone 11 Pro 256GB Memory",
//     image:
//       "https://github.com/bradtraversy/proshop_mern/blob/721c60ef9cdcabf26817c48ead94ca900173af50/frontend/public/images/phone.jpg?raw=true",
//     description:
//       "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
//     brand: "Apple",
//     category: "Electronics",
//     price: 599.99,
//     countInStock: 10,
//     rating: 4.0,
//     numReviews: 4,
//   },
//   {
//     name: "Cannon EOS 80D DSLR Camera",
//     image:
//       "https://github.com/bradtraversy/proshop_mern/blob/721c60ef9cdcabf26817c48ead94ca900173af50/frontend/public/images/camera.jpg?raw=true",
//     description:
//       "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
//     brand: "Cannon",
//     category: "Electronics",
//     price: 929.99,
//     countInStock: 5,
//     rating: 3,
//     numReviews: 3,
//   },
//   {
//     name: "Sony Playstation 4 Pro White Version",
//     image:
//       "https://github.com/bradtraversy/proshop_mern/blob/721c60ef9cdcabf26817c48ead94ca900173af50/frontend/public/images/playstation.jpg?raw=true",
//     description:
//       "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
//     brand: "Sony",
//     category: "Electronics",
//     price: 399.99,
//     countInStock: 10,
//     rating: 5,
//     numReviews: 3,
//   },
//   {
//     name: "Logitech G-Series Gaming Mouse",
//     image:
//       "https://github.com/bradtraversy/proshop_mern/blob/721c60ef9cdcabf26817c48ead94ca900173af50/frontend/public/images/mouse.jpg?raw=true",
//     description:
//       "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
//     brand: "Logitech",
//     category: "Electronics",
//     price: 49.99,
//     countInStock: 7,
//     rating: 3.5,
//     numReviews: 2,
//   },
//   {
//     name: "Amazon Echo Dot 3rd Generation",
//     image:
//       "https://github.com/bradtraversy/proshop_mern/blob/721c60ef9cdcabf26817c48ead94ca900173af50/frontend/public/images/alexa.jpg?raw=true",
//     description:
//       "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
//     brand: "Amazon",
//     category: "Electronics",
//     price: 29.99,
//     countInStock: 0,
//     rating: 4,
//     numReviews: 4,
//   },
// ];

// export default Products;
import React, { useEffect, useState } from "react";

function Productdetails() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);
  console.log(product);
  return product;
}

export default Productdetails;
