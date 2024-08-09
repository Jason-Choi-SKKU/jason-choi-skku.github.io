import { CareerItem } from "@/components";
import { experiences } from "@/data";
import { Flex, Heading, List } from "@chakra-ui/react";
import type { PropsWithRef } from "react";

export default function Experiences(props: PropsWithRef<FlexWithLanguageProps>) {
  const exps = experiences[props.locale] as CareerType[];

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
