"use client";

import { ProjectCard } from "@/components";
import { projects } from "@/data";
import { Button, Flex, Heading, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaExpand } from "react-icons/fa6";

export default function Projects({ locale }: { locale: Language }) {
  const projectData = projects[locale as Language] as ProjectType[];
  const [projectExpanded, setProjectExpanded] = useState<boolean>(false);
  return (
    <Flex direction={"column"} gap={4} w="full">
      <Flex justifyContent={"space-between"}>
        <Flex align={"start"} flexDir={"column"} gap={1}>
          <Heading as="h2" size={"md"}>
            {projectExpanded ? "All Projects" : "Selected Projects"}
          </Heading>
          <Text fontSize={"xs"}>Click to see details</Text>
        </Flex>
        <Button
          size={"sm"}
          variant={"ghost"}
          leftIcon={projectExpanded ? <Icon as={FaExpand} /> : <Icon as={FaExpand} />}
          onClick={() => setProjectExpanded(!projectExpanded)}>
          {projectExpanded ? "View Selected" : "View All"}
        </Button>
      </Flex>
      <Flex w="full">
        {projectExpanded ? (
          <SimpleGrid minChildWidth={240} spacing={4} w="full">
            {projectData.map((item, index) => (
              <ProjectCard item={item} key={`project${index}`} />
            ))}
          </SimpleGrid>
        ) : (
          <Flex gap={4} overflowX="scroll" pb={4}>
            {projectData
              .filter(item => item.selected)
              .map((item, index) => (
                <ProjectCard item={item} key={`project${index}`} />
              ))}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
