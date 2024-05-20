import { PRIMARY_COLOR } from "@/theme";

import Image from "next/image";

import { socials } from "@/data/socials";
import {
  As,
  Box,
  Button,
  CardProps,
  Center,
  Flex,
  FlexProps,
  Highlight,
  Icon,
  Link,
  List,
  ListItem,
  Select,
  Text,
  useColorMode,
  useStyleConfig,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useRouter } from "next/router";

type CareerItemProps = {
  career: CareerType;
  key: string;
} & FlexProps;

export const CareerItem = (props: CareerItemProps, key: string) => (
  <ListItem key={key} display={"flex"} flexDir={{ base: "column", md: "row" }}>
    <Text
      fontSize={"xs"}
      minW={"80px"}
      maxW={{
        base: "100%",
        md: "80px",
      }}
      py={0.5}
    >
      <Highlight query={["Present", "현재"]}>{props.career.date}</Highlight>
    </Text>

    <Flex direction={"column"}>
      {props.career.url ? (
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
      ) : (
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
      )}
      <Text as="i">{props.career.role}</Text>
      <Text fontSize={"sm"} color={"gray"}>
        {props.career.description}
      </Text>
    </Flex>
  </ListItem>
);

export function Card(props: CardProps) {
  const { variant, ...rest } = props;
  const styles = useStyleConfig("Card", { variant });
  return <Box __css={styles} {...rest} />;
}

export function SocialButton({ href, icon }: { href: string; icon: As }) {
  return (
    <ListItem>
      <Link as={NextLink} isExternal href={href}>
        <Button p={1} variant={"ghost"} colorScheme="gray">
          <Icon as={icon} />
        </Button>
      </Link>
    </ListItem>
  );
}

export const NavigationItem = (props: any) => (
  <Button
    size={{ base: "xs", sm: "sm", md: "md" }}
    justifyContent={{ base: "center", md: "flex-start" }}
    variant={props.selected ? "solid" : "ghost"}
    colorScheme={props.selected ? PRIMARY_COLOR : "gray"}
    onClick={props.onClick}
  >
    {props.children}
  </Button>
);

export function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { locale, push } = useRouter();
  const router = useRouter();
  return (
    <Center flexDir={"column"} gap={2} py={4}>
      <Flex
        bottom={4}
        right={4}
        w={"fit-content"}
        flexDir="row"
        gap={2}
        zIndex={1}
      >
        <Select
          size="sm"
          variant="outline"
          border={0}
          colorScheme="gray"
          value={router.locale}
          color="gray"
          onChange={(e) => {
            router.replace("/", "/", { locale: e.target.value });
          }}
        >
          <option value="en">English</option>
          <option value="ko">한국어</option>
        </Select>
        <Button
          rightIcon={<Icon as={colorMode === "light" ? FaSun : FaMoon} />}
          onClick={toggleColorMode}
          variant="ghost"
          colorScheme="gray"
          size="sm"
          color="gray"
        >
          {colorMode === "light" ? "Light" : "Dark"}
        </Button>
      </Flex>
      <Text w={"full"} fontSize="xs" align={"center"} color={"gray"}>
        {`Copyright © 2023 Jiwon Jason Choi. All Rights Reserved.`}
      </Text>
    </Center>
  );
}

export function Header({ aboutData }: { aboutData: AboutType }) {
  return (
    <Card
      variant={"elevated"}
      flexDir={{ base: "row", md: "column" }}
      alignItems={{ base: "flex-start", md: "center" }}
      gap={4}
      p={4}
    >
      <Box
        w={{ base: "100px", md: "120px" }}
        overflow={"hidden"}
        borderRadius={"100%"}
      >
        <Image
          width={120}
          height={120}
          src={aboutData.profileImage}
          alt={`Profile Image of ${aboutData.name}`}
          placeholder="blur"
        />
      </Box>
      <Flex flexDir="column">
        <Flex
          mx={2}
          flexDir={{
            base: "column",
            md: "column",
          }}
          align={{
            base: "flex-start",
            md: "center",
          }}
        >
          <Text fontWeight={700} fontSize={24}>
            {aboutData.name}
          </Text>
          <Text>{aboutData.description}</Text>
        </Flex>

        <List
          w={"full"}
          orientation={"horizontal"}
          justifyContent={{ base: "left", md: "space-evenly" }}
          display={"flex"}
        >
          {socials.map((social) => (
            <SocialButton key={social.href} {...social} />
          ))}
        </List>
      </Flex>
    </Card>
  );
}

export function Gallery({ item }: { item: ProjectType }, key: string) {
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
    </Card>
  );
}
