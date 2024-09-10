"use client";
import React, { useEffect, useRef } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import CreatePost from "./CreatePost";
import { useRouter } from "next/navigation";

const CreatePostModal = () => {
  // other hooks
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const isModuleMount = useRef<boolean>();
  const router = useRouter();

  useEffect(() => {
    if (!isModuleMount.current) {
      isModuleMount.current = true;
      onOpen();
    }
  }, [isModuleMount, onOpen]);

  return (
    <Modal
      isOpen={isOpen}
      defaultOpen={true}
      onOpenChange={() => {
        router.back();
        onOpenChange();
      }}
      size="2xl"
      className="p-4 no-scrollbar"
      scrollBehavior="outside"
      placement="top"
    >
      <ModalContent className="">
        {(onClose) => (
          <>
            <ModalBody>
              <CreatePost
                onCloseModal={() => {
                  router.back();
                  onClose();
                }}
              />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CreatePostModal;
