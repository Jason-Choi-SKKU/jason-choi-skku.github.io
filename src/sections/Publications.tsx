import {
  Flex,
  Heading,
  Highlight,
  List,
  ListItem,
  Text,
  Link,
  Button,
  Icon,
  FlexProps,
  ButtonGroup,
} from "@chakra-ui/react";
import { publications } from "@/data/publications";
import { authors } from "@/data/authors";
import {
  FaFilePdf,
  FaGithub,
  FaGlobe,
  FaVideo,
  FaVolumeHigh,
} from "react-icons/fa6";
import NextLink from "next/link";
function AuthorNames({ authorNames }: { authorNames: string[] }) {
  return (
    <Text>
      {authorNames.map((author, index) => (
        <>
          <Link
            key={`authorLink${author}${index}`}
            as={NextLink}
            href={authors.find((a) => a.name === author)?.url || ""}
          >
            <Text as="span" key={`author${index}`}>
              {author}
            </Text>
          </Link>
          <Text as="span" key={`comma${index}`}>
            {index === authorNames.length - 2
              ? authorNames.length === 2
                ? " and "
                : ", and "
              : index === authorNames.length - 1
              ? ""
              : ", "}
          </Text>
        </>
      ))}
    </Text>
  );
}

function PubButton({ href, icon, children }: any) {
  return (
    <Link as={NextLink} href={href} isExternal>
      <Button
        variant={"link"}
        p={0}
        size={"xs"}
        leftIcon={<Icon as={icon} />}
        colorScheme={"green"}
        zIndex={0}
      >
        {children}
      </Button>
    </Link>
  );
}

function PubItem(props: any, key: string) {
  return (
    <ListItem>
      <Text fontWeight={600} fontSize={"lg"}>
        {props.pub.title}
      </Text>

      <Text as={"i"}>
        <AuthorNames authorNames={props.pub.authorNames} />
      </Text>
      {props.pub.venue.map((venue: string) => (
        <Text color={"gray"} fontSize={"sm"} key={venue}>
          {venue}
        </Text>
      ))}
      <Flex gap={2}>
        <ButtonGroup>
          {props.pub.pdfLink && (
            <PubButton href={props.pub.pdfLink} icon={FaFilePdf}>
              PDF
            </PubButton>
          )}
          {props.pub.githubLink && (
            <PubButton href={props.pub.githubLink} icon={FaGithub}>
              GitHub
            </PubButton>
          )}
          {props.pub.webDemoLink && (
            <PubButton href={props.pub.webDemoLink} icon={FaGlobe}>
              Web Demo
            </PubButton>
          )}
          {props.pub.videoDemoLink && (
            <PubButton href={props.pub.videoDemoLink} icon={FaVideo}>
              Video Demo
            </PubButton>
          )}
          {props.pub.talkLink && (
            <PubButton href={props.pub.talkLink} icon={FaVolumeHigh}>
              Talk
            </PubButton>
          )}
        </ButtonGroup>
      </Flex>
    </ListItem>
  );
}

export default function Publications(props: any, key: string) {
  return (
    <Flex gap={4} direction={"column"} {...props}>
      <Heading as="h1" color={"green"}>
        Publications
      </Heading>
      <List gap={4} display={"flex"} flexDir={"column"}>
        {publications.map((pub, index) => (
          <PubItem pub={pub} key={`pub${index}`} />
        ))}
      </List>
    </Flex>
  );
}
