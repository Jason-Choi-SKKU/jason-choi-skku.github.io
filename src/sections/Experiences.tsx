import { experiences } from "@/data/experiences";
import { Flex, Heading, List } from "@chakra-ui/react";
import { CareerItem } from "./Layout";
import { useLanguage } from "@/hooks/useLanguage";
import { useData } from "@/hooks/useData";

export default function Experiences(props: any) {
  const exps = useData<CareerType[]>(experiences);

  return (
    <Flex gap={4} direction={"column"} {...props}>
      <Heading as="h1">Experiences</Heading>
      <List gap={4} display={"flex"} flexDir={"column"}>
        {exps.map((experience, index) => (
          <CareerItem career={experience} key={`exp${index}`} />
        ))}
      </List>
    </Flex>
  );
}
