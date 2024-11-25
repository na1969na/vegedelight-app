import { Link } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";

const SigninHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }} margin={"64px auto"}>
      <AppBar position="fixed" sx={{ background: "#00917d", boxShadow: 0 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h4"
            component="div"
            color="#FBF4E9"
            sx={{ display: { xs: "none", sm: "block" } }}
            fontFamily={"Coolvetica"}
          >
            <Link to={"/"}>VegeDelight</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default SigninHeader;
