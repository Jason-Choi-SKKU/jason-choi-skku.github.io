import Card from "@/components/Card";
import { navigations } from "@/data";
import { PRIMARY_COLOR } from "@/theme";
import { Box, Button, List, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";

interface NavigationProps {
  isOpen: boolean;
  sectionHandler: (idx: number) => void;
  currentSection: number;
}
const NavigationItem = (props: any) => (
  <Button
    size={{ base: "xs", sm: "sm", md: "md" }}
    justifyContent={{ base: "center", md: "flex-start" }}
    variant={props.selected ? "solid" : "ghost"}
    colorScheme={props.selected ? PRIMARY_COLOR : "gray"}
    onClick={props.onClick}>
    {props.children}
  </Button>
);

export default function Navigation({ isOpen, sectionHandler, currentSection }: NavigationProps) {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const sectionColor = useColorModeValue("white", "gray.800");
  const label: "label" | "labelShort" =
    useBreakpointValue({ base: "labelShort", md: "label" }, { fallback: "label" }) ?? "label";
  return (
    <Box minH={{ base: "55.5px", sm: "63.5px" }} px={isOpen ? 2 : 0}>
      <Card
        w="full"
        id="navigation"
        my={{ base: 0, md: 2 }}
        p={isOpen ? 3 : 5}
        boxShadow={isOpen ? "xs" : "none"}
        borderRadius={isOpen ? 16 : 0}
        position={isOpen ? "static" : "fixed"}
        zIndex={999}
        bgColor={isOpen ? sectionColor : bgColor}
        top={0}
        transition="background-color 0.2s linear, box-shadow 0.2s linear, border-radius 0.2s linear">
        <List
          display={"flex"}
          flexDir={{ base: "row", md: "column" }}
          w="full"
          justifyContent={{ base: "space-between", md: "flex-start" }}>
          {navigations.map((navigation, idx) => (
            <NavigationItem
              id={navigation.href}
              selected={idx === currentSection}
              key={`sect${idx}`}
              onClick={() => sectionHandler(idx)}>
              {navigation[label]}
            </NavigationItem>
          ))}
        </List>
      </Card>
    </Box>
  );
}
