import { createMuiTheme } from "@material-ui/core/styles";

const white = "#ffffff";
const lightgrey = "#eaeaea";
const darkgrey = "#141414";
const black = "#000000";
const yellow = "#fcf6df";
const darkRed = "#840310";
const darkerRed = "#630d16";

const theme = createMuiTheme({
  props: {
    // Name of the component
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application!
    },
  },
  palette: {
    common: {
      white: `${white}`,
      darkgrey: `${darkgrey}`,
      lightgrey: `${lightgrey}`,
      black: `${black}`,
      darkerRed: `${darkerRed}`,
    },
    primary: {
      main: `${darkRed}`,
    },
    secondary: {
      main: `${yellow}`,
    },
    tertiary: {
      main: `${darkgrey}`,
    },
  },
  typography: {
    fontFamily: "Poppins",
    fontWeight: 100,
    tab: {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "1.2rem",
    },
    footer: {
      fontFamily: "Poppins",

      fontWeight: 400,
      fontSize: "1rem",
    },
  },
  bodySection: { height: "800px" },
});

export default theme;
