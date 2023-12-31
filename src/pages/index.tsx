import { Image, Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Center,
  Collapse,
  Container,
  Flex,
  FlexProps,
  Heading,
  Icon,
  List,
  ListItem,
  ListItemProps,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Head from "next/head";
import NextImage from "next/image";
import me from "./jiwonchoi.png";

import { navigations } from "@/data/navigations";
import { socials } from "@/data/socials";

import About from "@/sections/About";
import Honors from "@/sections/Honors";
import Educations from "@/sections/Educations";
import Experiences from "@/sections/Experiences";
import Publications from "@/sections/Publications";
import { useRef, useState, useEffect } from "react";
import NextLink from "next/link";
type SocialButtonProps = {
  href: string;
  icon: any;
};
const Section = (props: FlexProps) => (
  <Flex
    p={{
      base: 4,
      md: 8,
    }}
    gap={2}
    borderRadius={16}
    bgColor={"white"}
    boxShadow={"xs"}
    w={"full"}
    flexDir={"column"}
    {...props}
  >
    {props.children}
  </Flex>
);

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
    colorScheme={props.selected ? "green" : "gray"}
    onClick={props.onClick}
  >
    {props.children}
  </Button>
);

function SocialButton({ href, icon }: SocialButtonProps) {
  return (
    <ListItem>
      <Link as={NextLink} isExternal href={href}>
        <Button p={1} variant={"ghost"}>
          <Icon as={icon} />
        </Button>
      </Link>
    </ListItem>
  );
}

function Header(props: FlexProps) {
  return (
    <Section
      align={"center"}
      flexDir={{
        base: "row",
        md: "column",
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
        <Image as={NextImage} src={me} alt="Jiwon Choi" />
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
          <Heading as="h1">Jason Choi</Heading>
          <Text mx={1}>{"Jiwon Choi, 최지원"}</Text>
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
    </Section>
  );
}

export default function Index() {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRef = useRef<HTMLDivElement[]>([]);
  const [isOpen, setIsOpen] = useState(true);

  function collapseHandler() {
    if (isOpen && window.scrollY > 65) {
      setIsOpen(false);
    } else if (window.scrollY < 65) {
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
          <Section
            p={3}
            bgColor={isOpen ? "white" : "gray.50"}
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
          </Section>
        </Flex>
        <Flex
          py={{
            base: 0,
            md: 2,
          }}
          px={2}
          position={"static"}
        >
          <Section gap={8}>
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
          </Section>
        </Flex>
      </Flex>
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
