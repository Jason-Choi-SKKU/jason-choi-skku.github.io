import { Flex, FlexProps, Heading, List } from "@chakra-ui/react";
import { CareerItem } from "./Layout";
import { honors } from "@/data/honors";
import { useData } from "@/hooks/useData";

export default function Honors(props: any) {
  const hos = useData(honors);
  return (
    <Flex gap={4} direction={"column"} {...props}>
      <Heading as="h1">Honors & Awards</Heading>
      <List gap={4} display={"flex"} flexDir={"column"}>
        {hos.map((award, index) => (
          <CareerItem career={award as CareerType} key={`award${index}`} />
        ))}
      </List>
    </Flex>
  );
}
