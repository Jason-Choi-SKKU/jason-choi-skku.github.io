import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Portal,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface IProjectModal {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

function ProjectModal({
  title,
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
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Portal>
    </Modal>
  );
}

export default ProjectModal;
