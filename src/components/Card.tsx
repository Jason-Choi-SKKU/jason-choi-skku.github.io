import { Box, type CardProps, useStyleConfig } from "@chakra-ui/react";

export default function Card(props: CardProps) {
  const { variant, ...rest } = props;
  const styles = useStyleConfig("Card", { variant });
  return <Box __css={styles} {...rest} />;
}
