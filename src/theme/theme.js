import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  brand: {
    100: "#f7fafc",
    500: "#7F5AF0", // violet highlight
    900: "#16161D", // background
    gradient: "linear(to-r, #7F5AF0, #2CB67D)", // green-violet gradient
  },
};

const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Inter', sans-serif`,
};

const theme = extendTheme({
  config,
  colors,
  fonts,
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.900" : "white",
        color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
        fontFamily: "body",
      },
    }),
  },
});

export default theme;
