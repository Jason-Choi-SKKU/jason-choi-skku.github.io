import BioContent from "@/data/bio.mdx";
import { Box, Flex, FlexProps } from "@chakra-ui/react";

export default function About(props: any) {
  return (
    <Flex flexDir={"column"} {...props}>
      <BioContent />
    </Flex>
  );
}
