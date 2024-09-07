import AnimatedContainer from "@/components/containers/AnimatedContainers";
import ProfilePic from "@/components/shared/profilePic/ProfilePic";
import { CommentInterface } from "@/types/reactions.types";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineEditOff } from "react-icons/md";

export interface CommentProps {
  comment: CommentInterface;
}

const Comment = ({ comment }: CommentProps) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <AnimatedContainer className="md:grid flex   md:grid-cols-12 items-start gap-x-2 sm:gap-x-4 md:gap-x-4 lg:gap-x-8  py-2 w-[90%]">
      <div className="md:col-span-1 w-max">
        <ProfilePic />
      </div>
      <ul className=" max-md:flex-1 md:col-span-11 flex flex-col justify-between">
        <li className="flex justify-between ">
          <div className=" flex flex-col md:flex-row items-start md:items-center gap-x-2 font-semibold mb-3">
            Julie Chang
            <p className="text-dark-gray text-[12px] font-normal">
              2 weeks ago
            </p>
          </div>
          <div className=" flex  justify-end gap-x-3">
            {isEdit && (
              <MdOutlineEditOff
                onClick={() => setIsEdit(false)}
                className=" cursor-pointer text-lg text-primary"
              />
            )}

            {!isEdit && (
              <AiOutlineEdit
                onClick={() => setIsEdit(true)}
                className=" cursor-pointer text-lg text-primary"
              />
            )}
            <MdOutlineDelete className=" cursor-pointer text-lg text-red-500" />
          </div>
        </li>

        {isEdit ? (
          <div className="flex  flex-col gap-y-2">
            {" "}
            <Textarea
              variant="bordered"
              labelPlacement="inside"
              size="sm"
              className="-mt-2  border-primary !bg-transparent focus:!border-b-gray-200 focus:!outline-none focus-within:!outline-none focus:!border-none"
              value={comment.content}
            />
            <div className="flex  justify-end">
              <Button
                size="sm"
                className="bg-gray-800 hover:!bg-gray-800 text-white"
              >
                Update
              </Button>
            </div>
          </div>
        ) : (
          <li className="dark:text-white text-[12px]">{comment.content}</li>
        )}
      </ul>
    </AnimatedContainer>
  );
};

export default Comment;
