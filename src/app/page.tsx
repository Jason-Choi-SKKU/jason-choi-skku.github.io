"use client";

import { Box, Center, Flex } from "@chakra-ui/react";
import Bio from "d/bio.mdx";
import Image from "next/image";

export default function Home() {
  return (
    <Center>
      <Flex
        px={4}
        maxW={"container.xl"}
        w="full"
        gap={8}
        direction={{
          base: "column",
          md: "row",
        }}
      >
        <Center>
          <Center
            minW={300}
            w={{ base: "column", md: "full" }}
            borderRadius={"12"}
            overflow={"hidden"}
          >
            <Image
              src="/assets/pic.png"
              width={300}
              height={300}
              alt="My Photo"
            />
          </Center>
        </Center>
        <Box lineHeight={7}>
          <Bio />
        </Box>
      </Flex>
    </Center>
  );
}
