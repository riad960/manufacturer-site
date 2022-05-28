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
import LocalMallSharpIcon from "@mui/icons-material/LocalMallSharp";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../Cart/CartContext";
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
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt="green iguana"
        />
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
          </div>
        </CardActions>
      </Card>
    </div>
  );
}

export default Product;
