import { PubItem } from "@/components";
import { publications } from "@/data/publications";
import type { FlexWithLanguageProps, PubType } from "@/types";
import { Flex, Heading, List } from "@chakra-ui/react";

export default function Publications(props: FlexWithLanguageProps, key: string) {
  return (
    <Flex gap={4} direction={"column"} key={key} {...props}>
      <Heading as="h1">Publications</Heading>
      <List gap={4} display={"flex"} flexDir={"column"}>
        {publications.map((pub: PubType, index) => (
          <PubItem pub={pub} key={`pub${index}`} />
        ))}
      </List>
    </Flex>
  );
}
