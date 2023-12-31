import { Image, Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  CardProps,
  Collapse,
  Container,
  Flex,
  FlexProps,
  Heading,
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
import { useEffect, useRef, useState } from "react";
import { PRIMARY_COLOR } from "./_theme";
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
      base: "sm",
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

function Header(props: FlexProps) {
  return (
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
      {...props}
    >
      <Box
        w={{
          base: "100px",
          md: "120px",
        }}
        overflow={"hidden"}
        borderRadius={"100%"}
      >
        <Image as={NextImage} src={me} alt="Jiwon Choi" placeholder="blur" />
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
  );
}

function isDesktop() {
  return (
    window.innerWidth >
    parseFloat(getComputedStyle(document.querySelector("body")!).fontSize) * 48
  );
}

export default function Index() {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRef = useRef<HTMLDivElement[]>([]);
  const [isOpen, setIsOpen] = useState(true);
  const { toggleColorMode } = useColorMode();

  function collapseHandler() {
    if (isOpen && window.scrollY > 57) {
      setIsOpen(false);
    } else if (window.scrollY < 57) {
      setIsOpen(true);
    }
  }

  function resizeHandler() {
    if (
      window.innerWidth <
      parseFloat(getComputedStyle(document.querySelector("body")!).fontSize) *
        48
    ) {
      window.addEventListener("scroll", collapseHandler);
    } else {
      window.removeEventListener("scroll", collapseHandler);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sectionIdx = sectionRef.current.findIndex((ref) => {
        if (!ref) return false;
        const rect = ref.getBoundingClientRect();
        return rect.top >= 0;
      });
      setCurrentSection(sectionIdx === -1 ? sections.length - 1 : sectionIdx);
    };
    window.addEventListener("scroll", handleScroll);
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onClick = (idx: number) => {
    if (idx == 0) {
      setIsOpen(true);
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    } else {
      window.scrollTo({
        top: sectionRef.current[idx].offsetTop - 8 * 8 - 10,
        behavior: "auto",
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
          h={{
            base: "auto",
            md: "full",
          }}
          borderRadius={16}
          display={"flex"}
          flexDir={"column"}
          position={"sticky"}
          top={{
            base: 0,
            md: 8,
          }}
          p={isOpen ? 2 : 0}
        >
          <Collapse in={isOpen} animateOpacity>
            <Header
              mb={{
                base: 2,
                md: 4,
              }}
            />
          </Collapse>
          <Card
            p={3}
            px={isOpen ? 3 : 5}
            boxShadow={isOpen ? "xs" : "none"}
            borderRadius={isOpen ? 16 : 0}
          >
            <List
              display={"flex"}
              flexDir={{
                base: "row",
                md: "column",
              }}
              w="full"
            >
              {navigations.map((navigation, idx) => (
                <NavigationItem
                  id={navigation.href}
                  selected={idx === currentSection}
                  key={`sect${idx}`}
                  onClick={() => onClick(idx)}
                >
                  {navigation.label}
                </NavigationItem>
              ))}
            </List>
          </Card>
        </Flex>
        <Flex
          py={{
            base: 0,
            md: 2,
          }}
          px={2}
          position={"static"}
        >
          <Card gap={8}>
            {sections.map(({ id, Component }) => (
              <Box
                key={id}
                id={id}
                ref={(ref) => {
                  sectionRef.current.push(ref as HTMLDivElement);
                }}
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
