import PubItem from "@/components/PubItem";
import { publications } from "@/data";
import {
  Badge,
  Heading,
  List,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Portal,
  Text,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface IProjectModal {
  project: ProjectType;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

function ProjectModal({
  project: { title, description, type, abbr },
  isOpen,
  onClose,
  onOpen,
  children,
}: PropsWithChildren<IProjectModal>) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={"4xl"}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <Portal>
        <ModalContent mx={4}>
          <ModalHeader>
            <Heading as="h2" size="md">
              {title}
            </Heading>
            <Text fontSize="sm">{description}</Text>
            <Badge colorScheme={type === "research" ? "orange" : "blue"}>
              {type}
            </Badge>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={12}>{children}</ModalBody>
        </ModalContent>
      </Portal>
    </Modal>
  );
}

export default ProjectModal;
