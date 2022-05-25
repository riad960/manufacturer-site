import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import { CartProvider } from "./Components/Cart/CartContext.js";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import ProductDetails from "./Components/Home/ProductDetails";
import Login from "./Components/Login/Login";
import Registration from "./Components/Login/Registration";
import Navabar from "./Components/Nav/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import RequireAuth from "./RequireAuth";

function App() {
  return (
    <CartProvider>
      <div className="bg-[#E7EBF0] min-h-screen">
        <Navabar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/cart"
              element={
                <RequireAuth>
                  <Cart />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart/:id" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
