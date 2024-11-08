import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#00917d",
    },
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            fontSize: "16px",
            color: "#00917d",
            borderRadius: 20,
            padding: "10px 20px",
            "&:hover": {
              opacity: "0.7",
            },
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            color: "#ffffff",
            backgroundColor: "#00917d",
            borderRadius: 20,
            padding: "10px 20px",
          },
        },
      ],
    },
  },
});

export default theme;
