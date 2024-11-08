import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const FoodItem = ({ id, name, price, category, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <Card
      className="food-item"
      sx={{
        borderRadius: "15px",
        boxShadow: "0px 0px 10px #00000015",
        transition: "0.3s",
        animation: "fadeIn 1s",
      }}
    >
      <Box position={"relative"}>
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{ borderRadius: "15px 15px 0px 0px" }}
        />
        {!cartItems[id] ? (
          <IconButton
            onClick={() => addToCart(id)}
            sx={{
              position: "absolute",
              bottom: "15px",
              right: "15px",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          >
            <AddIcon sx={{ color: "green" }} />
          </IconButton>
        ) : (
          <Box
            className="food-item-counter"
            sx={{
              position: "absolute",
              bottom: "15px",
              right: "15px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "6px",
              borderRadius: "50px",
              backgroundColor: "white",
            }}
          >
            <IconButton onClick={() => removeFromCart(id)}>
              <RemoveIcon sx={{ color: "red" }} />
            </IconButton>
            <Typography>{cartItems[id]}</Typography>
            <IconButton onClick={() => addToCart(id)}>
              <AddIcon sx={{ color: "green" }} />
            </IconButton>
          </Box>
        )}
      </Box>
      <CardContent>
        <Box>
          <Typography variant="h6" color="#bca987">
            {category}
          </Typography>
          <Typography variant="h6">{name}</Typography>
        </Box>
        <Typography variant="h6" color="#00917d">
          ${price.toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FoodItem;
