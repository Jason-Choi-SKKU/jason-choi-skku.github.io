import { type As, Button, Icon, Link, ListItem } from "@chakra-ui/react";
import NextLink from "next/link";

export default function SocialButton({
  href,
  icon,
}: {
  href: string;
  icon: As;
}) {
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
