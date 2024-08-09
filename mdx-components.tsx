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
      <Heading as="h3" size={"md"} my={2}>
        {children}
      </Heading>
    ),
    p: ({ children }) => (
      <Text as={"p"} fontSize={"md"} lineHeight={1.5}>
        {children}
      </Text>
    ),
    span: ({ children }) => (
      <Text as={"span"} fontSize={"md"}>
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
      <Text as={"strong"} fontSize={"md"}>
        {children}
      </Text>
    ),
    ol: ({ children }) => <OrderedList>{children}</OrderedList>,
    ul: ({ children }) => <UnorderedList>{children}</UnorderedList>,
    li: ({ children }) => (
      <ListItem>
        <Text as={"p"} fontSize={"md"} lineHeight={1.5}>
          {children}
        </Text>
      </ListItem>
    ),
    blockquote: ({ children }) => (
      <Box
        as={"blockquote"}
        border={"2px solid"}
        borderColor={colorMode === "light" ? PRIMARY[500] : PRIMARY[200]}
        borderRadius={"md"}
        pt={2}
        pb={4}
        px={4}
        mb={8}>
        {children}
      </Box>
    ),
    ...components,
  };
}
