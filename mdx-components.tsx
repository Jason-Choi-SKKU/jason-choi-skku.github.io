import { PRIMARY } from "@/theme";
import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const { colorMode } = useColorMode();
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <Heading as="h1" size={"lg"} my={2}>
        {children}
      </Heading>
    ),
    h2: ({ children }) => (
      <Heading as="h2" size={"md"} my={2}>
        {children}
      </Heading>
    ),
    h3: ({ children }) => (
      <Heading as="h3" size={"sm"} my={2}>
        {children}
      </Heading>
    ),
    p: ({ children }) => (
      <Text as={"p"} fontSize={"sm"} lineHeight={1.5} mb={4}>
        {children}
      </Text>
    ),
    strong: ({ children }) => (
      <Text as={"strong"} fontSize={"md"}>
        {children}
      </Text>
    ),
    blockquote: ({ children }) => (
      <Box
        as={"blockquote"}
        border={"2px solid"}
        borderColor={colorMode === "light" ? PRIMARY[500] : PRIMARY[200]}
        borderRadius={"md"}
        p={2}
        px={4}
      >
        {children}
      </Box>
    ),
    ...components,
  };
}
