import { PRIMARY } from "@/theme";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";

export function useColor() {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const sectionColor = useColorModeValue("white", "gray.800");
  const accentColor = useColorModeValue(PRIMARY[500], PRIMARY[200]);

  return {
    colorMode,
    toggleColorMode,
    bgColor,
    accentColor,
    sectionColor,
  };
}
