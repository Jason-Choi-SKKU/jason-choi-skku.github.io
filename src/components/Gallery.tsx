import { Box, Text, useColorMode, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { Card } from "./Layout";
import ProjectModal from "./ProjectModal";

export default function Gallery({ item }: { item: ProjectType }, key: string) {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Card
      overflow={"hidden"}
      borderRadius={"md"}
      key={key}
      minW={200}
      p={0}
      mb={2}
      gap={2}
      boxShadow={"sm"}
      backgroundColor={colorMode === "light" ? "gray.50" : "gray.900"}
      onClick={onOpen}
      _hover={{
        cursor: "pointer",
      }}
    >
      <Box h={100} w={"full"} position={"relative"} overflow={"hidden"}>
        <Image
          fill
          sizes="200px"
          src={item.image}
          alt={item.title}
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box px={2} pb={4}>
        <Text fontWeight={700} size={"md"}>
          {item.title}
        </Text>
        <Text fontSize={"xs"}>{item.description}</Text>
      </Box>
      <ProjectModal
        title={item.title}
        description={item.description}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      >
        <item.content />
      </ProjectModal>
    </Card>
  );
}
