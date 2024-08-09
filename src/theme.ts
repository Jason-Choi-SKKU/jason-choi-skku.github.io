import { defineStyleConfig, extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { type StyleFunctionProps, mode } from "@chakra-ui/theme-tools";

export const PRIMARY_COLOR = "orange";
export const PRIMARY = {
  50: `${PRIMARY_COLOR}.50`,
  100: `${PRIMARY_COLOR}.100`,
  200: `${PRIMARY_COLOR}.200`,
  300: `${PRIMARY_COLOR}.300`,
  400: `${PRIMARY_COLOR}.400`,
  500: `${PRIMARY_COLOR}.500`,
  600: `${PRIMARY_COLOR}.600`,
  700: `${PRIMARY_COLOR}.700`,
  800: `${PRIMARY_COLOR}.800`,
  900: `${PRIMARY_COLOR}.900`,
};

export const theme = extendTheme(
  {
    config: {
      initialColorMode: "dark",
      useSystemColorMode: true,
    },
    styles: {
      global: (props: StyleFunctionProps) => ({
        body: {
          bg: mode("gray.50", "gray.900")(props),

          "&::-webkit-scrollbar": {
            width: "6px",
            height: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "transparent",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
        },
        div: {
          "&::-webkit-scrollbar": {
            width: "6px",
            height: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: mode(PRIMARY[500], PRIMARY[200])(props),
            borderRadius: "6px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
        },
      }),
    },
    components: {
      Card: defineStyleConfig({
        baseStyle: props => ({
          display: "flex",
          flexDir: "column",
          borderRadius: 16,
          p: { base: 4, md: 8 },
          bg: mode("white", "gray.800")(props),
          boxShadow: mode("sm", "dark-sm")(props),
          gap: 2,
        }),
      }),
      Heading: defineStyleConfig({
        baseStyle: props => ({
          color: mode(PRIMARY[500], PRIMARY[200])(props),
        }),
      }),
      Mark: defineStyleConfig({
        baseStyle: props => ({
          bgColor: mode(PRIMARY[100], PRIMARY[900])(props),
          color: mode(PRIMARY[600], PRIMARY[100])(props),
          fontWeight: 600,
          p: 1,
          rounded: "md",
        }),
      }),
    },
  },
  withDefaultColorScheme({ colorScheme: PRIMARY_COLOR }),
);
