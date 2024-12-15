import { CareerItem } from "@/components";
import { honors } from "@/data/honors";
import type { FlexWithLanguageProps } from "@/types";
import { Flex, Heading, List } from "@chakra-ui/react";
import type { PropsWithRef } from "react";

export default function Honors(props: PropsWithRef<FlexWithLanguageProps>) {
  const hos = honors[props.locale]!;
  return (
    <Flex gap={4} direction={"column"} {...props}>
      <Heading as="h1">Honors & Services</Heading>
      <List gap={4} display={"flex"} flexDir={"column"}>
        {hos.map((award, index) => (
          <CareerItem career={award} key={`award${index}`} />
        ))}
      </List>
    </Flex>
  );
}
