import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "./PretendardVariable.woff2",
});

const theme = extendTheme({
  fonts: {
    heading: pretendard.style.fontFamily,
    body: pretendard.style.fontFamily,
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
