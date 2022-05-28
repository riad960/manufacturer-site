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
import Portfolio from "./Components/Prtfolio/Portfolio";
import RequireAuth from "./RequireAuth";
import Blog from "./Components/Blog/Blog";
import Payment from "./Components/Payment/Payment";
import Dashboard from "./Components/Dashboard/Dashboard";
import AddReviwes from "./Components/Dashboard/AddReviwes";
import MyOrders from "./Components/Dashboard/MyOrders";
import Profile from "./Components/Dashboard/Profile";
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
            <Route
              path="/payment/:id/:qty"
              element={
                <RequireAuth>
                  <Payment />
                </RequireAuth>
              }
            />
            <Route
              path="/myOrder/:id"
              element={
                <RequireAuth>
                  <MyOrders />
                </RequireAuth>
              }
            />
            <Route
              path="/addReview"
              element={
                <RequireAuth>
                  <AddReviwes />
                </RequireAuth>
              }
            />
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />

            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/blog" element={<Blog />} />
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
