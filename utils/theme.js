import createTheme from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff",
    },
  },
});
