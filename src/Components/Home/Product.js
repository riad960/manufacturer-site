import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LocalMallSharpIcon from "@mui/icons-material/LocalMallSharp";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../Cart/CartContext";
import useAdmin from "../Hooks/useAdmin";
import auth from "../../Firebase.init";
import { motion } from "framer-motion";
import { useAuthState } from "react-firebase-hooks/auth";
function Product({ product, handle, cart }) {
  const [value, setValue] = React.useState(2);
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useContext(CartContext);
  // handling buy now
  const handleBuyNow = (id) => {
    navigate(`/product/${product._id}`);
  };
  const handleCart = async (data) => {
    const exists = cartItems.filter((x) => x._id != data._id);

    const newData = [...exists, data];
    setCartItems(newData);
  };
  const [user, loading, error] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[610px]"
    >
      <Card sx={{ maxWidth: 345 }}>
        <div className="max-h-[250px] overflow-hidden">
          <img src={product.image} alt="" className="h-full object-center" />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography
            style={{
              color: "#e53935",
              fontWeight: "600",
              textShadow: "0 0 2px rgba(0,0,0,.1",
            }}
            gutterBottom
            variant="h6"
            component="div"
          >
            {product.price}$
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <div className="flex flex-col mx-2">
            <div className=" flex mb-1 mx-auto">
              <Rating
                name="half-rating-read"
                defaultValue={product.rating}
                precision={0.5}
                readOnly
              />
            </div>
            {!admin && (
              <div className="flex ">
                <div className="mx-5 my-2">
                  {" "}
                  <Button
                    variant="contained"
                    // size="small"
                    endIcon={<LocalMallSharpIcon />}
                    onClick={() => handleBuyNow(`${product._id}`)}
                  >
                    Buy Now
                  </Button>
                </div>
                <div className="mx-auto my-2">
                  {" "}
                  <Button
                    variant="contained"
                    // size="small"
                    style={{ background: "#f50057" }}
                    onClick={() => handleCart(product)}
                  >
                    <ShoppingCartIcon />
                  </Button>
                </div>
              </div>
            )}
            {admin && (
              <div className="mx-5 my-2 ">
                {" "}
                <Button
                  variant="contained"
                  // size="small"
                  endIcon={<ManageAccountsIcon />}
                  style={{ width: 280 }}
                  onClick={() => navigate("/manageItems")}
                >
                  Manage
                </Button>
              </div>
            )}
          </div>
        </CardActions>
      </Card>
    </motion.div>
  );
}

export default Product;
