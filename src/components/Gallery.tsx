import { Box, Text, useColorMode, useDisclosure } from "@chakra-ui/react";
import { Card } from "./Layout";
import Image from "next/image";
import ProjectModal from "./ProjectModal";
import { useRouter } from "next/navigation";

export default function Gallery({ item }: { item: ProjectType }, key: string) {
  const { colorMode } = useColorMode();
  // const router = useRouter();
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
    >
      <Box h={100} w={200} position={"relative"} overflow={"hidden"}>
        <Image
          sizes="200"
          fill
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
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      >
        <item.content />
      </ProjectModal>
    </Card>
  );
}
