"use client";

import { CacheProvider, Link } from "@chakra-ui/next-js";
import { ChakraProvider, Divider, Heading } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import { MDXComponents } from "mdx/types";
import Image from 'next/image';
import "pretendard/dist/web/variable/pretendardvariable.css";
import theme from "./theme";

const ResponsiveImage = (props: any) => (
  <Image
    alt={props.alt}
    sizes="100vw"
    style={{ width: '100%', height: 'auto' }}
    {...props}
  />
)
 
const components: MDXComponents = {
  img: ResponsiveImage,
  h1: ({children}: any) => <Heading as="h1" size={"xl"}>{children}</Heading>,
  h2: ({children}: any) => <Heading as="h2" size={"lg"}>{children}</Heading>,
  h3: ({children}: any) => <Heading as="h3" size={"md"}>{children}</Heading>,
  a: (props: any ) => <Link href={props.href}>{props.children}</Link>,
  hr: () => <Divider my={4}/>,
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <MDXProvider components={components}>
          {children}
        </MDXProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
