import { Post as PostInterface } from "@/types/post.types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import Post from "@/components/ui/post/Post/Post";
import PostedBy from "../postedby/PostedBy";
import { useSession } from "next-auth/react";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";

let isTrue = false;

const Share = ({ post }: { post: PostInterface }) => {
  // states
  const [isModalOpen, setIsModalOpen] = useState(false);

  // session hooks
  const session = useSession();
  const user = session.data?.user;

  // custom hooks

  // redux hooks

  // package hooks
  const { isOpen } = useDisclosure();

  // functions

  // effects
  useEffect(() => {
    // if (!isTrue) {
    //   setIsModalOpen(true);
    //   isTrue = true;
    // }
  }, []);

  return (
    <div>
      <div
        onClick={() => setIsModalOpen(!isModalOpen)}
        className="flex gap-2 cursor-pointer"
      >
        <Image src="/assets/share.svg" width={20} height={20} alt="Like Icon" />
        <p>10k</p>
      </div>
      <Modal
        isOpen={isModalOpen}
        onOpenChange={() => setIsModalOpen(!isModalOpen)}
      >
        <ModalContent>
          {(onClose) => (
            <section className="p-4 flex flex-col gap-y-4">
              <PostedBy {...user} />
              <Textarea placeholder="Say something about this" size="sm" />
              <section className="border p-4 rounded-xl">
                <Post post={post} hideReactions />
              </section>
              <section className="flex justify-end gap-x-2">
                <Button size="sm" className=" bg-primary text-white">
                  Share
                </Button>
                <Button size="sm" variant="bordered">
                  Cancel
                </Button>
              </section>
            </section>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Share;
