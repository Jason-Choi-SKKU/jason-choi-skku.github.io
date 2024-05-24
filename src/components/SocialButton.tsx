import NextLink from "next/link";
import { As, Button, Icon, Link, ListItem } from "@chakra-ui/react";

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
