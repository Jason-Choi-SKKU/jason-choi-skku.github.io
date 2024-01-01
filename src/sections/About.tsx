import { news } from "@/data/news";
import { projects } from "@/data/projects";
import { useData } from "@/hooks/useData";
import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
  useToken,
} from "@chakra-ui/react";
import { Card, Gallery } from "./Layout";
import { Image } from "@chakra-ui/next-js";
import NextImage from "next/image";
import { useColor } from "@/hooks/useColor";

export function About({ aboutData }: { aboutData: AboutType }) {
  const { accentColor } = useColor();
  const [scrollColor] = useToken("colors", [accentColor]);
  const newsData = useData<NewsType[]>(news);
  const projectData = useData<ProjectType[]>(projects);

  return (
    <Flex flexDir={"column"} gap={4}>
      <aboutData.Bio />
      <Heading as="h2" size={"md"}>
        News
      </Heading>
      <List gap={2} display={"flex"} flexDir={"column"}>
        {newsData.map((item, index) => (
          <ListItem key={`news${index}`}>
            <Flex align={"top"}>
              <Text fontWeight={700} size={"sm"} minW={100}>
                {item.date}
              </Text>
              <Text size={"sm"}>{item.description}</Text>
            </Flex>
          </ListItem>
        ))}
      </List>
      <Heading as="h2" size={"md"}>
        Featured Projects
      </Heading>
      <Box w="full">
        <Flex
          gap={4}
          overflowX="scroll"
          css={{
            "&::-webkit-scrollbar": {
              width: "10px",
              height: "10px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: scrollColor,
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "transparent",
            },
          }}
        >
          {projectData.map((item, index) => (
            <Gallery item={item} key={`project${index}`} />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}
