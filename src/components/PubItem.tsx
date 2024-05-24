"use client";

import { authors } from "@/data/authors";
import {
  Box,
  Center,
  Highlight,
  Icon,
  Link,
  ListItem,
  Text,
} from "@chakra-ui/react";

import NextLink from "next/link";
import {
  FaFilePdf,
  FaGithub,
  FaGlobe,
  FaVideo,
  FaVolumeHigh,
} from "react-icons/fa6";
function AuthorNames({ authorNames }: { authorNames: string[] }) {
  return (
    <>
      {authorNames.map((author, index) => (
        <Text as="i" key={`authorNames${index}`}>
          <Link
            as={NextLink}
            href={authors.find((a) => a.name === author)?.url || ""}
          >
            <Text as="span" key={`author${index}`}>
              <Highlight
                query={["Jiwon Choi"]}
                styles={{
                  backgroundColor: "none",
                  padding: 0,
                  textDecoration: "underline",
                }}
              >
                {author}
              </Highlight>
            </Text>
          </Link>
          <Text as="span">
            {index === authorNames.length - 2
              ? authorNames.length === 2
                ? " and "
                : ", and "
              : index === authorNames.length - 1
              ? ""
              : ", "}
          </Text>
        </Text>
      ))}
    </>
  );
}

function PubButton({ href, icon, children }: any) {
  return (
    <Link as={NextLink} href={href} isExternal>
      <Center p={1} fontSize={"xs"}>
        <Icon as={icon} mr={1} />
        {children}
      </Center>
    </Link>
  );
}

export default function PubItem(props: { pub: PubType }, key: string) {
  return (
    <ListItem key={key}>
      <Text fontWeight={600} fontSize={"lg"}>
        {props.pub.title}
      </Text>

      <AuthorNames authorNames={props.pub.authorNames} />

      {props.pub.venue.map((venue: string) => (
        <Text color={"gray"} fontSize={"sm"} key={venue}>
          {venue}
        </Text>
      ))}
      <Box display={"flex"} flexWrap={"wrap"} gap={1}>
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
      </Box>
    </ListItem>
  );
}
