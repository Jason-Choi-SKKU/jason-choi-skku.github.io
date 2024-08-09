import { Button, Center, Flex, Icon, Select, Text, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function Footer({ locale }: { locale: Language }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { push } = useRouter();
  return (
    <Center flexDir={"column"} gap={2} py={4}>
      <Flex bottom={4} right={4} w={"fit-content"} flexDir="row" gap={2} zIndex={1}>
        <Select
          size="sm"
          variant="outline"
          border={0}
          colorScheme="gray"
          value={locale}
          color="gray"
          onChange={e => {
            push(`/${e.target.value}`);
          }}>
          <option value="en">English</option>
          <option value="ko">한국어</option>
        </Select>
        <Button
          rightIcon={<Icon as={colorMode === "light" ? FaSun : FaMoon} />}
          onClick={toggleColorMode}
          variant="ghost"
          colorScheme="gray"
          size="sm"
          color="gray">
          {colorMode === "light" ? "Light" : "Dark"}
        </Button>
      </Flex>
      <Text w={"full"} fontSize="xs" align={"center"} color={"gray"}>
        {"Copyright © 2023 Jiwon Jason Choi. All Rights Reserved."}
      </Text>
    </Center>
  );
}
