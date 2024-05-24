"use client";

import { news } from "@/data";
import { Flex, Heading, List, ListItem, Text } from "@chakra-ui/react";

export function News({ locale }: { locale: Language }) {
  const newsData = news[locale as Language] as NewsType[];

  return (
    <Flex flexDir={"column"} gap={4}>
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
    </Flex>
  );
}
