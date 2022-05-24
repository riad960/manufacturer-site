import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import LocalMallSharpIcon from "@mui/icons-material/LocalMallSharp";
import React from "react";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const [value, setValue] = React.useState(2);
  const navigate = useNavigate();

  // handling buy now
  const handleBuyNow = (id) => {
    navigate(`/product/${product._id}`);
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

            <div className="mx-auto my-2">
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
          </div>
        </CardActions>
      </Card>
    </div>
  );
}

export default Product;
