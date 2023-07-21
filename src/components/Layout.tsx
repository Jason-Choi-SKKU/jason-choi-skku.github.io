"use client";
import { Button, Center, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiOutlineTwitter } from "react-icons/ai";

const Header = () => {
  return (
    <Center>
      <Flex px={4} py={2} w={"full"} maxW={"container.xl"} alignItems="center">
        <Heading size="md" variant={"layout"} alignItems="center">
          Jiwon Choi
        </Heading>
        <Spacer />

        
        <Link href="https://github.com/Jason-Choi">
          <Button variant={"layout"} p={0}>
            <AiFillGithub />
          </Button>
        </Link>
        <Link href="https://www.instagram.com/jiwnchoi/">
          <Button variant={"layout"} p={0}>
            <AiFillInstagram />
          </Button>
        </Link>
        <Link href="https://twitter.com/jiwnchoi/">
          <Button variant={"layout"} p={0}>
            <AiOutlineTwitter />
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/jiwnchoi/">
          <Button variant={"layout"} p={0}>
            <AiFillLinkedin />
          </Button>
        </Link>

        

      </Flex>
    </Center>
  );
};

const Footer = () => {
  return (
    <Center>
      <Flex px={4} py={2} w={"full"} maxW={"container.xl"} alignItems="center">
        <Text variant={"layout"} fontSize={"xs"}>© 2023 Jiwon Choi. All rights reserved.</Text>
      </Flex>
    </Center>
        
  );
};

export { Header, Footer };
