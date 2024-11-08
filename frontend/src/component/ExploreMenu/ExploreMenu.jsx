import { menu_list } from "../../assets/assets";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <Box width="80%" margin={"40px auto"}>
      <Container>
        <Typography variant="h3" align="center" fontWeight={"bold"}>
          Explore the menu
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="30px"
          textAlign="center"
          margin="50px 0px"
          overflow="auto"
          sx={{ "&::-webkit-scrollbar": { display: "none" } }}
        >
          {menu_list.map((menu) => (
            <Box
              key={menu.id}
              onClick={() =>
                setCategory((prev) =>
                  prev === menu.menu_name ? "All" : menu.menu_name
                )
              }
              sx={{
                cursor: "pointer",
                transition: "0.2s",
              }}
            >
              <Box
                component="img"
                src={menu.menu_image}
                alt="menu"
                sx={{
                  width: "7.5vw",
                  minWidth: "80px",
                  borderRadius: "50%",
                  border:
                    category === menu.menu_name ? "4px solid #3b9213" : "none",
                  padding: category === menu.menu_name ? "2px" : "none",
                }}
              />
              <Typography
                sx={{
                  marginTop: "10px",
                  fontSize: "max(1.4vw, 16px)",
                }}
              >
                {menu.menu_name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ExploreMenu;
