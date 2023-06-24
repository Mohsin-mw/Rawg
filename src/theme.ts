// theme.js

import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    body: `'Raleway', sans-serif`,
  },
};

const theme = extendTheme({ config });

export default theme;
