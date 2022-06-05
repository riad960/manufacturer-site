import { Route, Routes, useLocation } from "react-router-dom";
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
import AddItems from "./Components/Admin/AddItems";
import Users from "./Components/Dashboard/Users";
import ManageItems from "./Components/Admin/ManageItems";
import ManageOrders from "./Components/Admin/ManageOrders";
import AllProducts from "./Components/Home/AllProducts";
import Checkout from "./Components/Dashboard/Checkout";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <CartProvider>
        <div className="bg-[#E7EBF0] min-h-screen">
          <Navabar />
          <div className="min-h-[80vh]">
            <Routes location={location} key={location.pathname}>
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
              <Route
                path="/addItems"
                element={
                  <RequireAuth>
                    <AddItems />
                  </RequireAuth>
                }
              />
              <Route
                path="/users"
                element={
                  <RequireAuth>
                    <Users />
                  </RequireAuth>
                }
              />
              <Route
                path="/manageItems"
                element={
                  <RequireAuth>
                    <ManageItems />
                  </RequireAuth>
                }
              />
              <Route
                path="/manageOrder"
                element={
                  <RequireAuth>
                    <ManageOrders />
                  </RequireAuth>
                }
              />

              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/checkout/:id/:qty" element={<Checkout />} />
              <Route path="/products" element={<AllProducts />} />
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
    </AnimatePresence>
  );
}

export default App;
