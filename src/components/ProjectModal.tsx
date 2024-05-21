import {
  Heading,
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
    <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
      <ModalOverlay />
      <Portal>
        <ModalContent>
          <ModalHeader>
            <Heading as="h2" size="md">
              {title}
            </Heading>
            <Text fontSize="sm">{description}</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Portal>
    </Modal>
  );
}

export default ProjectModal;
