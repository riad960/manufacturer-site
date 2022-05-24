import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import ProductDetails from "./Components/Home/ProductDetails";
import Login from "./Components/Login/Login";
import Navabar from "./Components/Nav/Navbar";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="bg-[#E7EBF0] min-h-screen">
      <Navabar />
      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
