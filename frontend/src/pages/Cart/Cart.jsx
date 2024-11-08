import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import {
  Box,
  Typography,
  Button,
  Stack,
  Divider,
  IconButton,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <Box width="80%" margin={"100px auto"}>
      <Grid container spacing={2} sx={{ color: "grey", alignItems: "center" }}>
        <Grid item size={2}>
          <Typography variant="h6">Items</Typography>
        </Grid>
        <Grid item size={3}>
          <Typography variant="h6">Title</Typography>
        </Grid>
        <Grid item size={2}>
          <Typography variant="h6">Price</Typography>
        </Grid>
        <Grid item size={2}>
          <Typography variant="h6">Quantity</Typography>
        </Grid>
        <Grid item size={2}>
          <Typography variant="h6">Total</Typography>
        </Grid>
        <Grid item size={1}>
          <Typography variant="h6">Remove</Typography>
        </Grid>
      </Grid>
      <Divider sx={{ marginY: "15px" }} />
      {food_list.map((item) => {
        if (cartItems[item._id] > 0) {
          return (
            <Box key={item._id}>
              <Grid container spacing={2} sx={{ alignItems: "center" }}>
                <Grid item size={2}>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{
                      width: "50px",
                    }}
                  />
                </Grid>
                <Grid item size={3}>
                  <Typography variant="h6">{item.name}</Typography>
                </Grid>
                <Grid item size={2}>
                  <Typography variant="h6">${item.price}</Typography>
                </Grid>
                <Grid item size={2}>
                  <Typography variant="h6">{cartItems[item._id]}</Typography>
                </Grid>
                <Grid item size={2}>
                  <Typography variant="h6">
                    ${(item.price * cartItems[item._id]).toFixed(2)}
                  </Typography>
                </Grid>
                <Grid item size={1}>
                  <IconButton
                    onClick={() => removeFromCart(item._id)}
                    className="close"
                  >
                    <CloseIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Divider sx={{ marginY: "15px" }} />
            </Box>
          );
        }
      })}
      <Box>
        <Stack
          direction="row"
          justifyContent={"space-between"}
          marginTop={"80px"}
        >
          <Stack width={"40%"}>
            <Typography variant="h5">Cart Totals</Typography>
            <Stack
              direction="row"
              justifyContent={"space-between"}
              marginTop={"30px"}
              color="#555"
            >
              <Typography variant="h6">Subtotal</Typography>
              <Typography variant="h6">${getTotalCartAmount()}</Typography>
            </Stack>
            <Divider sx={{ marginY: "10px" }} />
            <Stack
              direction="row"
              justifyContent={"space-between"}
              color="#555"
            >
              <Typography variant="h6">Delivery Fee</Typography>
              <Typography variant="h6">
                ${getTotalCartAmount() === 0 ? 0 : 2}
              </Typography>
            </Stack>
            <Divider sx={{ marginY: "10px" }} />
            <Stack direction="row" justifyContent={"space-between"}>
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </Typography>
            </Stack>
            <Button
              sx={{ width: "250px", marginTop: "30px" }}
              width="20px"
              variant="secondary"
              // onClick={() => navigate("/order")}
            >
              PROCEED TO CHECKOUT
            </Button>
          </Stack>
          <Stack>
            <Typography variant="h6" color="initial">
              Have a promo code?
            </Typography>
            <Stack marginTop="30px" direction={"column"} spacing={3}>
              <TextField
                sx={{ width: "500px" }}
                hiddenLabel
                id="filled-hidden-label-normal"
                placeholder="promo code"
                variant="outlined"
                size="small"
                color="#E0E3E7"
              />
              <Button
                sx={{ width: "100px", background: "black", color: "#e9e9e9" }}
              >
                Apply code
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Cart;
