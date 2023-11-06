// theme.js

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976D2", // Replace with your primary color
    },
    secondary: {
      main: "#E91E63", // Replace with your secondary color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 16,
  },
  // Add more customizations as needed
});

export default theme;
