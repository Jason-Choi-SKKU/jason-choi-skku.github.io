import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Portal,
  Text,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface IProjectModal {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

function ProjectModal({
  title,
  description,
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
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Portal>
    </Modal>
  );
}

export default ProjectModal;
