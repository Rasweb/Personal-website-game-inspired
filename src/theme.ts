import { createTheme } from "@mui/material/styles";

// Create a custom theme
const theme = createTheme({
  // Define theme values here
  palette: {
    primary: {
      main: "#2196F3", // Customize your primary color
    },
    secondary: {
      main: "#FF5722", // Customize your secondary color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Customize the default font family
  },
  spacing: 8, // Define the base spacing unit (optional)
  // Add more theme values as needed
});

export default theme;
