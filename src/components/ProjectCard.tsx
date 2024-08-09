import Card from "@/components/Card";
import { Badge, Box, Flex, Text, useColorMode, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

export default function ProjectCard({ item }: { item: ProjectType }, key: string) {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Card
      overflow={"hidden"}
      borderRadius={"md"}
      key={key}
      w={"full"}
      minW={240}
      p={0}
      gap={2}
      boxShadow={"sm"}
      backgroundColor={colorMode === "light" ? "gray.50" : "gray.900"}
      onClick={onOpen}
      _hover={{
        cursor: "pointer",
      }}>
      <Box h={100} w={"full"} position={"relative"} overflow={"hidden"}>
        <Image
          fill
          sizes="180px"
          src={item.teaser}
          alt={item.title}
          style={{ objectFit: "cover" }}
          placeholder="blur"
        />
      </Box>
      <Box px={2} pb={2}>
        <Flex>
          <Badge size={"xs"} colorScheme={item.type === "research" ? "orange" : "blue"}>
            {item.type}
          </Badge>
          {item.date && (
            <Text fontSize={"xs"} ml={2}>
              {item.date}
            </Text>
          )}
        </Flex>
        <Text fontWeight={700} size={"md"}>
          {item.title}
        </Text>
        <Text fontSize={"xs"}>{item.description}</Text>
      </Box>
      <ProjectModal project={item} isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
        <item.content />
      </ProjectModal>
    </Card>
  );
}
