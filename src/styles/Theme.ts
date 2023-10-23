import { createTheme } from "@mui/material/styles";

// primary -Midnight Blue // background
// secondary - Navy // headers or other prominent elements
// info - Dark Slate Blue // content - highlight
// accentCustom - Dark Indigo // buttons, or interactive elements
// linkCustom - Blue // links
// hoverFocus - Lighter Blue // link hover and focus states

// Other
// Neutral Background (#1a1a1a): Section backgrounds
// Neutral Border (#333333): Borders or dividers between sections.

// TODO: Make a dark/light mode switch, use this link - https://mui.com/material-ui/customization/dark-mode/#toggling-color-mode

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

// const lightTheme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#ffffff",
//     },
//     secondary: {
//       main: "#11122b",
//     },
//     info: {
//       main: "#2e2f5e",
//     },
//     error: {
//       main: "#ff3e3e",
//     },
//     success: {
//       main: "#0cbc7d",
//     },
//     accentCustom: "#1d1e44",
//     linkCustom: "#0078d4",
//     hoverFocus: "#0a6ebd",
//     mainText: "#050517",
//     secondaryText: "#11122b",
//   },
// });

export default theme;
