"use client";

import { Gallery } from "@/components";
import { news } from "@/data/news";
import { projects } from "@/data/projects";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  List,
  ListItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaExpand } from "react-icons/fa6";

export function About({
  aboutData,
  locale,
}: {
  aboutData: AboutType;
  locale: Language;
}) {
  const newsData = news[locale as Language] as NewsType[];
  const projectData = projects[locale as Language] as ProjectType[];
  const [projectExpanded, setProjectExpanded] = useState<boolean>(false);

  return (
    <Flex flexDir={"column"} gap={4}>
      <aboutData.Bio />
      <Heading as="h2" size={"md"}>
        News
      </Heading>
      <List gap={2} display={"flex"} flexDir={"column"}>
        {newsData.map((item, index) => (
          <ListItem key={`news${index}`}>
            <Flex align={"top"}>
              <Text fontWeight={700} size={"sm"} minW={100}>
                {item.date}
              </Text>
              <Text size={"sm"}>{item.description}</Text>
            </Flex>
          </ListItem>
        ))}
      </List>
      <Flex justifyContent={"space-between"}>
        <Heading as="h2" size={"md"}>
          {projectExpanded ? "All Projects" : "Selected Projects"}
        </Heading>
        <Button
          size={"xs"}
          variant={"ghost"}
          leftIcon={
            projectExpanded ? <Icon as={FaExpand} /> : <Icon as={FaExpand} />
          }
          onClick={() => setProjectExpanded(!projectExpanded)}
        >
          {projectExpanded ? "View Selected" : "View All"}
        </Button>
      </Flex>
      <Box w="full">
        {projectExpanded ? (
          <SimpleGrid minChildWidth={180} spacing={4}>
            {projectData.map((item, index) => (
              <Gallery item={item} key={`project${index}`} />
            ))}
          </SimpleGrid>
        ) : (
          <Flex gap={4} overflowX="scroll">
            {projectData
              .filter((item) => item.selected)
              .map((item, index) => (
                <Gallery item={item} key={`project${index}`} />
              ))}
          </Flex>
        )}
      </Box>
    </Flex>
  );
}
