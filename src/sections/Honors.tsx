import { Flex, FlexProps, Heading, List } from "@chakra-ui/react";
import { CareerItem } from "./Layout";
import { honors } from "@/data/honors";

export default function Honors(props: any) {
  return (
    <Flex gap={4} direction={"column"} {...props}>
      <Heading as="h1">Honors & Awards</Heading>
      <List gap={4} display={"flex"} flexDir={"column"}>
        {honors.map((award, index) => (
          <CareerItem career={award} key={`award${index}`} />
        ))}
      </List>
    </Flex>
  );
}
