"use client";
import React from "react";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/modal";
import { PiWarningCircle } from "react-icons/pi";
import { Button } from "@nextui-org/button";
import { ConfirmModalBtnEnum } from "@/types/global.types";

export interface ConfirmDeleteModelProps {
  warningMessage: string;
  isModalOpen: boolean;
  isConfirmLoad: boolean;
  onModalChange: () => void;
  onClose?: () => void;
  onConfirmation: (action: ConfirmModalBtnEnum) => void;
}

const ConfirmDeleteModel = ({
  warningMessage,
  isModalOpen,
  isConfirmLoad,
  onModalChange,
  onClose,
  onConfirmation,
}: ConfirmDeleteModelProps) => {
  const { isOpen } = useDisclosure();

  return (
    <Modal
      isOpen={isOpen || isModalOpen}
      size="sm"
      onOpenChange={() => !isConfirmLoad && onModalChange()}
    >
      <ModalContent>
        {(onClose) => (
          <section className="flex flex-col justify-center gap-y-4 items-center h-[40vh] min-h-[200px] max-h-[350px] p-4">
            <PiWarningCircle className=" text-red-500   text-[7vw]" />
            <p className=" text-gray-800 font-medium text-center">
              {warningMessage}
            </p>
            <div className="flex w-full justify-center gap-x-2">
              <Button
                disabled={isConfirmLoad}
                onClick={() => onConfirmation(ConfirmModalBtnEnum.CONFIRM)}
                className=" rounded-lg bg-gray-800 text-white"
                isLoading={isConfirmLoad}
              >
                Confirm
              </Button>
              <Button
                disabled={isConfirmLoad}
                onClick={() => onConfirmation(ConfirmModalBtnEnum.CANCEL)}
                className=" rounded-lg  bg-red-500 text-white"
              >
                Cancel
              </Button>
            </div>
          </section>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ConfirmDeleteModel;
