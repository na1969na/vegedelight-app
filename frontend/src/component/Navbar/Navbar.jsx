import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  InputBase,
  Stack,
  Badge,
} from "@mui/material";

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartItems } = useContext(StoreContext);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    color: "black",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    borderBottom: "1px solid black",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  return (
    <Box sx={{ flexGrow: 1 }} margin={"64px auto"}>
      <AppBar position="fixed" sx={{ background: "#FBF4E9", boxShadow: 0 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h4"
            component="div"
            color="#00917d"
            sx={{ display: { xs: "none", sm: "block" } }}
            fontFamily={"Coolvetica"}
          >
            <Link to={"/"}>VegeDelight</Link>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Stack flexDirection={"row"}>
            <IconButton
              edge="start"
              aria-label="cart"
              sx={{
                width: "40px",
                height: "40px",
              }}
            >
              <Link to="/cart">
                <Badge badgeContent={getTotalCartItems()} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </Link>
            </IconButton>
            <Button
              sx={{ width: "150px" }}
              variant="primary"
              onClick={() => setShowLogin(true)}
            >
              Login
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
