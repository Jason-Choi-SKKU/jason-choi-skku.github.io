import { experiences } from "@/data/experiences";
import { Flex, Heading, List } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { CareerItem } from "../components/Layout";

export default function Experiences(props: any) {
  const { locale } = useRouter();
  const exps = experiences[locale as Language] as CareerType[];

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
