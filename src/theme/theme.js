import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const colors = {
  brand: {
    900: "#264653", // dark blue-green
    500: "#2a9d8f", // teal - buttons, highlights
    300: "#f4a261", // warm orange - hover effects
    100: "#e9c46a", // warm sand - accents
    gradient: "linear(to-r, #2a9d8f, #f4a261)",
  },
};

const fonts = {
  heading: `'DM Sans', sans-serif`,
  body: `'DM Sans', sans-serif`,
};

const theme = extendTheme({
  config,
  colors,
  fonts,
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "brand.900" : "white",
        color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
      },
    }),
  },
});

export default theme;
