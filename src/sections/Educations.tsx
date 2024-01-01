import { educations } from "@/data/educations";
import { Flex, FlexProps, Heading, List } from "@chakra-ui/react";
import { CareerItem } from "./Layout";
import { useLanguage } from "@/hooks/useLanguage";
import { useData } from "@/hooks/useData";

export default function Educations(props: any) {
  const edus = useData(educations);

  return (
    <Flex gap={4} direction={"column"} {...props}>
      <Heading as="h1">Educations</Heading>
      <List gap={4} display={"flex"} flexDir={"column"}>
        {edus.map((education, index) => (
          <CareerItem career={education as CareerType} key={`edu${index}`} />
        ))}
      </List>
    </Flex>
  );
}
