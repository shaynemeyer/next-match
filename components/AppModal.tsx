import {
  Button,
  ButtonProps,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { ReactNode } from "react";

type AppModalProps = {
  isOpen: boolean;
  onClose: () => void;
  header: string;
  body: ReactNode;
  footerButtons: ButtonProps[];
};

function AppModal({
  isOpen,
  onClose,
  header,
  body,
  footerButtons,
}: AppModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      placement="top-center"
      motionProps={{
        variants: {
          enter: { y: 0, opacity: 100, transition: { duration: 0.3 } },
          exit: { y: 100, opacity: 0, transition: { duration: 0.3 } },
        },
      }}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">{header}</ModalHeader>
        <ModalBody>{body}</ModalBody>
        <ModalFooter>
          {footerButtons.map((props: ButtonProps, index) => (
            <Button key={index} {...props}>
              {props.children}
            </Button>
          ))}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
export default AppModal;
