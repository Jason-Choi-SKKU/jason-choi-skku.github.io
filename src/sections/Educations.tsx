import { educations } from "@/data/educations";
import { useData } from "@/hooks/useData";
import { Flex, Heading, List } from "@chakra-ui/react";
import { CareerItem } from "./Layout";

export default function Educations(props: any) {
  const edus = useData<CareerType[]>(educations);

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
