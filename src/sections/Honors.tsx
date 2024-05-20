import { honors } from "@/data/honors";
import { Flex, Heading, List } from "@chakra-ui/react";
import { CareerItem } from "../components/Layout";

export default function Honors(props: FlexWithLanguageProps) {
  const hos = honors[props.locale as Language] as CareerType[];
  return (
    <Flex gap={4} direction={"column"} {...props}>
      <Heading as="h1">Honors & Awards</Heading>
      <List gap={4} display={"flex"} flexDir={"column"}>
        {hos.map((award, index) => (
          <CareerItem career={award} key={`award${index}`} />
        ))}
      </List>
    </Flex>
  );
}
