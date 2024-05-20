import { Box, Container, Flex, List } from "@chakra-ui/react";
import Head from "next/head";

import { about } from "@/data/about";
import { navigations } from "@/data/navigations";
import { useColor } from "@/hooks/useColor";
import { useLayoutScroll } from "@/hooks/useLayoutScroll";
import Educations from "@/sections/Educations";
import Experiences from "@/sections/Experiences";
import Honors from "@/sections/Honors";
import { Card, Footer, Header, NavigationItem } from "@/components/Layout";
import Publications from "@/sections/Publications";
import { About } from "@/sections/About";
import { useRouter } from "next/router";

export default function Index() {
  const { locale } = useRouter();
  const aboutData = about[locale as Language] as AboutType;
  const { bgColor, sectionColor } = useColor();
  const {
    currentSection,
    sectionHandler,
    isOpen,
    sectionRef,
    headerRef,
    isDesktop,
  } = useLayoutScroll();

  return (
    <Container maxW={"container.xl"} p={{ base: 0, md: 8 }}>
      <Head>
        <title>{aboutData.pageTitle}</title>
        <meta name="description" content={aboutData.pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Flex flexDir={{ base: "column", md: "row" }}>
        <Flex
          minW={{ base: 0, md: "280px" }}
          h={{ base: "auto", md: "full" }}
          borderRadius={16}
          flexDir={"column"}
          position={isDesktop ? "sticky" : "static"}
          top={{ base: 0, md: 8 }}
        >
          <Box ref={headerRef} m={2}>
            <Header aboutData={aboutData} />
          </Box>
          <Box minH={{ base: "55.5px", sm: "63.5px" }} px={isOpen ? 2 : 0}>
            <Card
              w="full"
              id="navigation"
              my={{ base: 0, md: 2 }}
              p={isOpen ? 3 : 5}
              boxShadow={isOpen ? "xs" : "none"}
              borderRadius={isOpen ? 16 : 0}
              position={isOpen ? "static" : "fixed"}
              zIndex={999}
              bgColor={isOpen ? sectionColor : bgColor}
              top={0}
              transition="background-color 0.2s linear, box-shadow 0.2s linear, border-radius 0.2s linear"
            >
              <List
                display={"flex"}
                flexDir={{ base: "row", md: "column" }}
                w="full"
                justifyContent={{ base: "space-between", md: "flex-start" }}
              >
                {navigations.map((navigation, idx) => (
                  <NavigationItem
                    id={navigation.href}
                    selected={idx === currentSection}
                    key={`sect${idx}`}
                    onClick={() => sectionHandler(idx)}
                  >
                    {navigation.label}
                  </NavigationItem>
                ))}
              </List>
            </Card>
          </Box>
        </Flex>
        <Flex
          maxW={{ base: "full", md: "calc(100% - 280px)" }}
          flexGrow={1}
          py={{
            base: 0,
            md: 2,
          }}
          px={2}
        >
          <Card gap={8} w="full">
            <Box
              id="about"
              ref={(el) => {
                sectionRef.current[0] = el!;
              }}
            >
              <About aboutData={aboutData} />
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
      <Footer />
    </Container>
  );
}

const sections = [
  { id: "experiences", Component: Experiences },
  { id: "educations", Component: Educations },
  { id: "publications", Component: Publications },
  { id: "honors", Component: Honors },
];
