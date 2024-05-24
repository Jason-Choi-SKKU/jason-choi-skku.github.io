"use client";

import { about } from "@/data";
import { useLayoutScroll } from "@/hooks/useLayoutScroll";
import {
  About,
  Educations,
  Experiences,
  Honors,
  Projects,
  Publications,
} from "@/sections";
import { Box, Container, Flex } from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import { Card, Footer, Header } from "@/components";

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
            <Flex
              w="full"
              flexDir={"column"}
              gap={8}
              id="about"
              ref={(el) => {
                sectionRef.current[0] = el!;
              }}
            >
              <Box>
                <aboutData.Bio />
              </Box>
              <About locale={locale} />
              <Projects locale={locale} />
            </Flex>
            <Flex
              ref={(el) => {
                sectionRef.current[1] = el!;
              }}
            >
              <Experiences locale={locale} />
            </Flex>
            <Flex
              ref={(el) => {
                sectionRef.current[2] = el!;
              }}
            >
              <Educations locale={locale} />
            </Flex>
            <Flex
              ref={(el) => {
                sectionRef.current[3] = el!;
              }}
            >
              <Publications locale={locale} />
            </Flex>
            <Flex
              ref={(el) => {
                sectionRef.current[4] = el!;
              }}
            >
              <Honors locale={locale} />
            </Flex>
          </Card>
        </Flex>
      </Flex>
      <Footer locale={locale} />
    </Container>
  );
}
