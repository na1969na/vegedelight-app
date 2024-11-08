import { Typography, Stack, Container, Box } from "@mui/material";

const Header = () => {
  return (
    <Box
      height={"50vw"}
      sx={{
        background: 'url("/header_img.svg") no-repeat center center',
        backgroundSize: "cover",
      }}
    >
      <Container position="relative">
        <Stack position={"absolute"} left={"4vw"} bottom={"15%"} width="40%">
          <Typography variant="h5" color="#4e4637" fontWeight={"bold"}>
            Enjoy the best of nature with our wholesome vegetarian dishes,
            thoughtfully prepared and sustainably sourced. <br />
            Feel good about what you eat!
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
