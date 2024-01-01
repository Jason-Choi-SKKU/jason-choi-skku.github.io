import { Image, Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  CardProps,
  Center,
  Container,
  Flex,
  Icon,
  List,
  ListItem,
  Select,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
  useStyleConfig,
} from "@chakra-ui/react";
import { throttle } from "lodash";
import Head from "next/head";
import NextImage from "next/image";
import me from "./jiwonchoi.png";

import { navigations } from "@/data/navigations";
import { socials } from "@/data/socials";

import Educations from "@/sections/Educations";
import Experiences from "@/sections/Experiences";
import Honors from "@/sections/Honors";
import Publications from "@/sections/Publications";
import NextLink from "next/link";
import { useEffect, useRef, useState } from "react";
import { PRIMARY_COLOR } from "../theme";
import { useData } from "@/hooks/useData";
import { about } from "@/data/about";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useLanguage } from "@/hooks/useLanguage";

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
      sm: "sm",
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
  const { colorMode, toggleColorMode } = useColorMode();
  const isDesktop = useIsDesktop();
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const sectionColor = useColorModeValue("white", "gray.800");
  const aboutData = useData<AboutType>(about);
  const lang = useLanguage();

  useEffect(() => {
    const handleScroll = throttle(() => {
      const sectionIdx = sectionRef.current.findIndex((ref) => {
        if (!ref) return false;
        const rect = ref.getBoundingClientRect();
        return (rect.top + rect.bottom) / 2 > 56;
      });
      if (sectionIdx !== -1) {
        setCurrentSection(sectionIdx);
      }
    }, 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const headerRect = headerRef.current?.getBoundingClientRect();
      if (headerRect && headerRect.bottom > 0) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }, 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        <title>{aboutData.pageTitle}</title>
        <meta name="description" content={aboutData.pageDescription} />
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
          minW={{
            base: 0,
            md: "280px",
          }}
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
          <Box ref={headerRef} m={2}>
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
                >
                  <Text fontWeight={700} fontSize={24}>
                    {aboutData.name}
                  </Text>
                  <Text>{aboutData.description}</Text>
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
          <Box
            minH={{
              base: "55.5px",
              sm: "63.5px",
            }}
            px={isOpen ? 2 : 0}
          >
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
                justifyContent={{
                  base: "space-between",
                  md: "flex-start",
                }}
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
          flexGrow={1}
          py={{
            base: 0,
            md: 2,
          }}
          px={2}
        >
          <Card gap={8} w="full">
            <Box
              ref={(el) => {
                sectionRef.current[0] = el!;
              }}
            >
              <aboutData.Bio />
            </Box>
            {sections.map(({ id, Component }, idx) => (
              <Box
                key={id}
                id={id}
                ref={(el) => {
                  sectionRef.current[idx + 1] = el!;
                }}
              >
                <Component />
              </Box>
            ))}
          </Card>
        </Flex>
      </Flex>
      <Center flexDir={"column"} my={4} gap={2}>
        <Flex
          bottom={4}
          right={4}
          w={"fit-content"}
          flexDir="row"
          gap={2}
          zIndex={1}
          bgColor={bgColor}
        >
          <Select
            size="sm"
            variant="outline"
            border={0}
            colorScheme="gray"
            color="gray"
            value={lang}
            onChange={(e) => {
              localStorage.setItem("language", e.target.value);
              window.location.reload();
            }}
          >
            <option value="en">English</option>
            <option value="ko">한국어</option>
          </Select>
          <Button
            rightIcon={<Icon as={useColorModeValue(FaSun, FaMoon)} />}
            onClick={toggleColorMode}
            variant="ghost"
            colorScheme="gray"
            size="sm"
            color="gray"
          >
            {colorMode === "light" ? "Light" : "Dark"}
          </Button>
        </Flex>
        <Text w={"full"} fontSize="xs" align={"center"} color={"gray"}>
          {`Copyright © 2023 ${aboutData.name}. All Rights Reserved.`}
        </Text>
      </Center>
    </Container>
  );
}

const sections = [
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
