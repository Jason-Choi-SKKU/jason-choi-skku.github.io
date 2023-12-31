import { experiences } from "@/data/experiences";
import { Flex, Heading, List } from "@chakra-ui/react";
import { CareerItem } from "./Layout";

export default function Experiences(props: any) {
  return (
    <Flex gap={4} direction={"column"} {...props}>
      <Heading as="h1">Experiences</Heading>
      <List gap={4} display={"flex"} flexDir={"column"}>
        {experiences.map((experience, index) => (
          <CareerItem career={experience} key={`exp${index}`} />
        ))}
      </List>
    </Flex>
  );
}
