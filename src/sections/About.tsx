import { news } from "@/data/news";
import { projects } from "@/data/projects";
import { useColor } from "@/hooks/useColor";
import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
  useToken,
} from "@chakra-ui/react";
import { Gallery } from "./Layout";
import { useRouter } from "next/router";

export function About({ aboutData }: { aboutData: AboutType }) {
  const { accentColor } = useColor();
  const { locale } = useRouter();

  const newsData = news[locale as Language] as NewsType[];
  const projectData = projects[locale as Language] as ProjectType[];

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
        <Flex gap={4} overflowX="scroll">
          {projectData.map((item, index) => (
            <Gallery item={item} key={`project${index}`} />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}
