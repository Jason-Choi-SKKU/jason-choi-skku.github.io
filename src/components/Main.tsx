"use client";

import { about } from "@/data/about";
import { useLayoutScroll } from "@/hooks/useLayoutScroll";
import {
  About,
  Educations,
  Experiences,
  Honors,
  Publications,
} from "@/sections";
import { Box, Container, Flex } from "@chakra-ui/react";
import { Card, Footer, Header } from "./Layout";
import Navigation from "./Navigation";

export default function Main({ locale }: { locale: Language }) {
  const aboutData = about[locale as Language] as AboutType;

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
          <Navigation
            isOpen={isOpen}
            currentSection={currentSection}
            sectionHandler={sectionHandler}
          />
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
              <About locale={locale} aboutData={aboutData} />
            </Box>
            {sections.map(({ id, Component }, idx) => (
              <Box
                key={id}
                id={id}
                ref={(el) => {
                  sectionRef.current[idx + 1] = el!;
                }}
              >
                <Component locale={locale} />
              </Box>
            ))}
          </Card>
        </Flex>
      </Flex>
      <Footer locale={locale} />
    </Container>
  );
}

const sections = [
  { id: "experiences", Component: Experiences },
  { id: "educations", Component: Educations },
  { id: "publications", Component: Publications },
  { id: "honors", Component: Honors },
];
