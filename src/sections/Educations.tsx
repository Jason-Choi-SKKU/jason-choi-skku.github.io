import { educations } from "@/data/educations";
import { Flex, Heading, List } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { CareerItem } from "../components/Layout";

export default function Educations(props: any) {
  const { locale } = useRouter();
  const edus = educations[locale as Language] as CareerType[];

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
