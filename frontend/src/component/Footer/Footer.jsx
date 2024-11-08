import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Footer = () => {
  return (
    <Box
      sx={{ padding: "40px 20px", backgroundColor: "#3e3930" }}
      color={"#e7d6ba"}
    >
      <Stack flexDirection={"row"} gap={"10%"} justifyContent={"center"}>
        <Typography
          variant="h4"
          component="div"
          color="#00917d"
          sx={{ display: { xs: "none", sm: "block" } }}
          fontFamily={"Coolvetica"}
        >
          VegeDelight
        </Typography>
        <Box>
          <Typography variant="h6">COMPANY</Typography>
          <List>
            <ListItem>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem>
              <ListItemText primary="About us" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Delivery" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Privacy policy" />
            </ListItem>
          </List>
        </Box>
        <Box>
          <Typography variant="h6">GET IN TOUCH</Typography>
          <List>
            <ListItem>
              <LocalPhoneIcon sx={{ marginRight: "10px" }} />
              <ListItemText primary="+1 123-456-7890" />
            </ListItem>
            <ListItem>
              <MailOutlineIcon sx={{ marginRight: "10px" }} />
              <ListItemText primary="contact@vegedelight.com" />
            </ListItem>
          </List>
        </Box>
      </Stack>
      <Typography
        variant="body2"
        className="footer-copyright"
        sx={{ textAlign: "center" }}
        marginTop={"5%"}
      >
        Copyright 2024 © VegeDelight.com - All Right Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
