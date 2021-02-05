import { createMuiTheme } from "@material-ui/core/styles";

const white = "#ffffff";
const lightgrey = "#b8b8b8";
const darkgrey = "#141414";
const black = "#000000";
const yellow = "#e9a320";

const theme = createMuiTheme({
  palette: {
    common: {
      white: `${white}`,
      darkgrey: `${darkgrey}`,
      lightgrey: `${lightgrey}`,
      black: `${black}`,
    },
    primary: {
      main: `${darkgrey}`,
    },
    secondary: {
      main: `${yellow}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Poppins",
      fontWeight: 500,
      fontSize: "1.2rem",
    },
    footer: {
      fontFamily: "Poppins",

      fontWeight: 300,
      fontSize: "1rem",
    },
  },
  bodySection: { height: "800px" },
});

export default theme;
