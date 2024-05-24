import { PRIMARY } from "@/theme";
import {
  Box,
  Heading,
  List,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  useColorMode,
} from "@chakra-ui/react";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const { colorMode } = useColorMode();
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <Heading as="h1" size={"lg"} mb={1} mt={8}>
        {children}
      </Heading>
    ),
    h2: ({ children }) => (
      <Heading as="h2" size={"md"} mb={1} mt={8}>
        {children}
      </Heading>
    ),
    h3: ({ children }) => (
      <Heading as="h3" size={"sm"} mb={1} mt={8}>
        {children}
      </Heading>
    ),
    p: ({ children }) => (
      <Text as={"p"} fontSize={"sm"} lineHeight={1.5}>
        {children}
      </Text>
    ),
    a: ({ href, children }) => (
      <Link href={href ?? "/"}>
        <Text as={"span"} textDecoration={"underline"}>
          {children}
        </Text>
      </Link>
    ),
    strong: ({ children }) => (
      <Text as={"strong"} fontSize={"sm"}>
        {children}
      </Text>
    ),
    ol: ({ children }) => (
      <OrderedList pl={4}>
        <ListItem as={"li"}>
          <Text as={"p"} fontSize={"sm"} lineHeight={1.5}>
            {children}
          </Text>
        </ListItem>
      </OrderedList>
    ),
    ul: ({ children }) => (
      <UnorderedList as={"ul"}>
        <ListItem as={"li"}>
          <Text as={"p"} fontSize={"sm"} lineHeight={1.5}>
            {children}
          </Text>
        </ListItem>
      </UnorderedList>
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
