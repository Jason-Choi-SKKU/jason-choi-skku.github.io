import { educations } from "@/data";
import { Flex, Heading, List } from "@chakra-ui/react";
import { CareerItem } from "../components/Layout";

export default function Educations(props: FlexWithLanguageProps) {
  const edus = educations[props.locale] as CareerType[];

  return (
    <Flex gap={4} direction={"column"} {...props}>
      <Heading as="h1">Educations</Heading>
      <List gap={4} display={"flex"} flexDir={"column"}>
        {edus.map((education, index) => (
          <CareerItem career={education} key={`edu${index}`} />
        ))}
      </List>
    </Flex>
  );
}
