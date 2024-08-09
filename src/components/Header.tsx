import Card from "@/components/Card";
import SocialButton from "@/components/SocialButton";
import { socials } from "@/data";
import { Box, Flex, List, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Header({ aboutData }: { aboutData: AboutType }) {
  return (
    <Card
      variant={"elevated"}
      flexDir={{ base: "row", md: "column" }}
      alignItems={{ base: "flex-start", md: "center" }}
      gap={4}
      p={4}>
      <Box w={{ base: "100px", md: "120px" }} overflow={"hidden"} borderRadius={"100%"}>
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
          }}>
          <Text fontWeight={700} fontSize={24}>
            {aboutData.name}
          </Text>
          <Text>{aboutData.description}</Text>
        </Flex>

        <List
          w={"full"}
          orientation={"horizontal"}
          justifyContent={{ base: "left", md: "space-evenly" }}
          display={"flex"}>
          {socials.map(social => (
            <SocialButton key={social.href} {...social} />
          ))}
        </List>
      </Flex>
    </Card>
  );
}
