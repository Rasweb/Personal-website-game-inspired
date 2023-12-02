import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    accentCustom: string;
    linkCustom: string;
    hoverFocus: string;
    mainText: string;
    secondaryText: string;
  }

  interface PaletteOptions {
    accentCustom: string;
    linkCustom: string;
    hoverFocus: string;
    mainText: string;
    secondaryText: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#050517",
    },
    secondary: {
      main: "#11122b",
    },
    info: {
      main: "#2e2f5e",
    },
    error: {
      main: "#ff3e3e",
    },
    success: {
      main: "#0cbc7d",
    },
    accentCustom: "#1d1e44",
    linkCustom: "#0078d4",
    hoverFocus: "#0a6ebd",
    mainText: "#ffffff",
    secondaryText: "#f0f0f0",
  },
});

export default theme;
