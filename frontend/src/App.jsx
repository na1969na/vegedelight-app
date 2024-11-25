import Navbar from "./component/Navbar/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./component/Footer/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { SignIn } from "@clerk/clerk-react";
import SigninHeader from "./component/SigninHeader/SigninHeader";
import { Box } from "@mui/material";
import { useEffect } from 'react';

const App = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/sign-in";

  useEffect(() => {
    if (hideHeaderFooter) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [hideHeaderFooter]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="app">
          {!hideHeaderFooter ? <Navbar /> : <SigninHeader />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
            <Route
              path="/sign-in"
              element={
                <Box
                  sx={{
                    minHeight:"90vh",
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SignIn />
                </Box>
              }
            />
          </Routes>
        </div>
        {!hideHeaderFooter && <Footer />}
      </ThemeProvider>
    </>
  );
};

export default App;
