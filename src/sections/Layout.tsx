import { PRIMARY } from "@/pages/_theme";
import {
  Flex,
  FlexProps,
  Highlight,
  Link,
  ListItem,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

type CareerItemProps = {
  career: EntityType;
  key: string;
} & FlexProps;

export const CareerItem = (props: CareerItemProps, key: string) => (
  <ListItem
    key={key}
    display={"flex"}
    flexDir={{
      base: "column",
      md: "row",
    }}
  >
    <Text
      fontSize={"xs"}
      minW={"80px"}
      maxW={{
        base: "100%",
        md: "80px",
      }}
    >
      <Highlight query={"Present"}>{props.career.date}</Highlight>
    </Text>

    <Flex direction={"column"}>
      <Link as={NextLink} href={props.career.url} isExternal>
        <Text>
          <Text as="span" fontWeight={600} fontSize={"lg"}>
            {props.career.title}
          </Text>
          {props.career.location && (
            <Text as="span" fontSize="xs">
              , {props.career.location}
            </Text>
          )}
        </Text>
      </Link>
      <Text as="i">{props.career.role}</Text>
      <Text fontSize={"sm"} color={"gray"}>
        {props.career.description}
      </Text>
    </Flex>
  </ListItem>
);
