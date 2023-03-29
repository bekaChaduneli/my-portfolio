import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "Catamaran, sans-serif",
  },
  colors: {
    brand: {
      100: "#000000",
      200: "#ffffff",
      300: "#ffc400",
    },
  },
  breakpoints: {
    sm: "280px",
    md: "768px",
    lg: "1090px",
    xl: "1440px",
  },
  styles: {
    global: {
      "html, body": {
        overflowX: "hidden",
        padding: "0px",
        margin: "0px",
        boxSizing: "border-box",
      },
    },
  },
});
