import { Image, Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  CardProps,
  Container,
  Flex,
  FlexProps,
  Icon,
  List,
  ListItem,
  Text,
  useColorMode,
  useColorModeValue,
  useStyleConfig,
} from "@chakra-ui/react";
import Head from "next/head";
import NextImage from "next/image";
import me from "./jiwonchoi.png";

import { navigations } from "@/data/navigations";
import { socials } from "@/data/socials";

import About from "@/sections/About";
import Educations from "@/sections/Educations";
import Experiences from "@/sections/Experiences";
import Honors from "@/sections/Honors";
import Publications from "@/sections/Publications";
import NextLink from "next/link";
import { use, useEffect, useRef, useState } from "react";
import { PRIMARY_COLOR } from "../theme";
type SocialButtonProps = {
  href: string;
  icon: any;
};

function Card(props: CardProps) {
  const { variant, ...rest } = props;
  const styles = useStyleConfig("Card", { variant });
  return <Box __css={styles} {...rest} />;
}

const NavigationItem = (props: any) => (
  <Button
    size={{
      base: "xs",
      md: "md",
    }}
    justifyContent={{
      base: "center",
      md: "flex-start",
    }}
    variant={props.selected ? "solid" : "ghost"}
    colorScheme={props.selected ? PRIMARY_COLOR : "gray"}
    onClick={props.onClick}
  >
    {props.children}
  </Button>
);

function SocialButton({ href, icon }: SocialButtonProps) {
  return (
    <ListItem>
      <Link as={NextLink} isExternal href={href}>
        <Button p={1} variant={"ghost"} colorScheme="gray">
          <Icon as={icon} />
        </Button>
      </Link>
    </ListItem>
  );
}

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    setIsDesktop(
      window.innerWidth >
        parseFloat(getComputedStyle(document.querySelector("body")!).fontSize) *
          48
    );
    window.addEventListener("resize", () => {
      setIsDesktop(
        window.innerWidth >
          parseFloat(
            getComputedStyle(document.querySelector("body")!).fontSize
          ) *
            48
      );
    });
  }, []);
  return isDesktop;
};

export default function Index() {
  const [currentSection, setCurrentSection] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement[]>([]);
  const [isOpen, setIsOpen] = useState(true);
  const { toggleColorMode } = useColorMode();
  const isDesktop = useIsDesktop();
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const sectionColor = useColorModeValue("white", "gray.800");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIdx = sectionRef.current.findIndex((ref) => {
        if (!ref) return false;
        const rect = ref.getBoundingClientRect();
        console.log(rect.top);
        return (rect.top + rect.bottom) / 2 > 56;
      });
      if (sectionIdx !== -1) {
        setCurrentSection(sectionIdx);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsOpen(true);
          } else {
            setIsOpen(false);
          }
        });
      },
      {
        threshold: 0,
      }
    );
    observer.observe(headerRef.current!);
    return () => observer.disconnect();
  }, []);

  const navigationHandler = (idx: number) => {
    if (idx == 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: sectionRef.current[idx].offsetTop - 56 - 10,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container maxW={"container.xl"} p={0}>
      <Head>
        <title>Jiwon Jason Choi</title>
        <meta name="description" content="Jason's Personal Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Flex
        flexDir={{
          base: "column",
          md: "row",
        }}
        p={{
          base: 0,
          md: 8,
        }}
      >
        <Flex
          minW={"280px"}
          px={isOpen ? 2 : 0}
          h={{
            base: "auto",
            md: "full",
          }}
          borderRadius={16}
          flexDir={"column"}
          position={isDesktop ? "sticky" : "static"}
          top={{
            base: 0,
            md: 8,
          }}
        >
          <Box ref={headerRef} my={2}>
            <Card
              flexDir={{
                base: "row",
                md: "column",
              }}
              alignItems={{
                base: "flex-start",
                md: "center",
              }}
              gap={4}
              p={4}
            >
              <Box
                w={{
                  base: "100px",
                  md: "120px",
                }}
                overflow={"hidden"}
                borderRadius={"100%"}
              >
                <Image
                  as={NextImage}
                  src={me}
                  alt="Jiwon Choi"
                  placeholder="blur"
                />
              </Box>
              <Flex flexDir="column">
                <Flex
                  mx={2}
                  flexDir={{
                    base: "column",
                    md: "column",
                  }}
                  align={{
                    base: "flex-start",
                    md: "center",
                  }}
                  gap={{
                    base: 0,
                    md: 0,
                  }}
                >
                  <Text fontWeight={700} fontSize={24}>
                    Jiwon Choi
                  </Text>
                  <Text>{"Jason Choi, 최지원"}</Text>
                </Flex>

                <List
                  w={"full"}
                  orientation={"horizontal"}
                  justifyContent={{
                    base: "left",
                    md: "space-evenly",
                  }}
                  display={"flex"}
                >
                  {socials.map((social) => (
                    <SocialButton key={social.href} {...social} />
                  ))}
                </List>
              </Flex>
            </Card>
          </Box>
          <Box minH="56px">
            <Card
              w="full"
              id="navigation"
              mt={{
                base: 0,
                md: 4,
              }}
              p={isOpen ? 3 : 5}
              boxShadow={isOpen ? "xs" : "none"}
              borderRadius={isOpen ? 16 : 0}
              position={isOpen ? "static" : "fixed"}
              bgColor={isOpen ? sectionColor : bgColor}
              top={0}
              mb={2}
              transition="background-color 0.2s linear, box-shadow 0.2s linear, border-radius 0.2s linear"
            >
              <List
                display={"flex"}
                flexDir={{
                  base: "row",
                  md: "column",
                }}
                w="full"
                overflow={"hidden"}
              >
                {navigations.map((navigation, idx) => (
                  <NavigationItem
                    id={navigation.href}
                    selected={idx === currentSection}
                    key={`sect${idx}`}
                    onClick={() => navigationHandler(idx)}
                  >
                    {navigation.label}
                  </NavigationItem>
                ))}
              </List>
            </Card>
          </Box>
        </Flex>
        <Flex
          py={{
            base: 0,
            md: 2,
          }}
          px={2}
        >
          <Card gap={8} w="full">
            {sections.map(({ id, Component }, idx) => (
              <Box
                key={id}
                id={id}
                ref={(el) => (sectionRef.current[idx] = el!)}
              >
                <Component />
              </Box>
            ))}
          </Card>
        </Flex>
      </Flex>
      <Text w={"full"} fontSize="xs" align={"center"} color={"gray"} my={4}>
        Copyright © 2023 Jiwon Jason Choi. All Rights Reserved.
      </Text>
      <Text
        w={"full"}
        fontSize="xs"
        align={"center"}
        color={"gray"}
        my={4}
        onClick={toggleColorMode}
      >
        Toggle Color Mode
      </Text>
    </Container>
  );
}

const sections = [
  {
    id: "about",
    Component: About,
  },
  {
    id: "experiences",
    Component: Experiences,
  },
  {
    id: "educations",
    Component: Educations,
  },
  {
    id: "publications",
    Component: Publications,
  },
  {
    id: "honors",
    Component: Honors,
  },
];
