import { educations } from "@/data/educations";
import { Flex, FlexProps, Heading, List } from "@chakra-ui/react";
import { CareerItem } from "./Layout";

export default function Educations(props: any) {
  return (
    <Flex gap={4} direction={"column"} {...props}>
      <Heading as="h1" color={"green"}>
        Educations
      </Heading>
      <List gap={4} display={"flex"} flexDir={"column"}>
        {educations.map((education, index) => (
          <CareerItem career={education} key={`edu${index}`} />
        ))}
      </List>
    </Flex>
  );
}
