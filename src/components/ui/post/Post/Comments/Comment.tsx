import ProfilePic from "@/components/shared/profilePic/ProfilePic";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineEditOff } from "react-icons/md";

const Comment = () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="grid grid-cols-12 items-start  py-2 w-[90%]">
      <div className="col-span-1 w-max">
        <ProfilePic />
      </div>
      <ul className="col-span-11 flex flex-col justify-between">
        <li className="flex justify-between ">
          <div className="font-semibold mb-3">
            Julie Chang
            <span className="text-dark-gray text-[12px] ml-2  font-normal">
              2 weeks ago
            </span>
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
              value={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis
          neque reiciendis fugiat labore tempora libero nulla cum. Porro,
          deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sunt corporis neque reiciendis fugiat labore tempora libero nulla cum.
          Porro, deleniti. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sunt corporis neque reiciendis fugiat labore tempora libero
          nulla cum. Porro, deleniti.`}
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
          <li className="dark:text-white text-[12px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            corporis neque reiciendis fugiat labore tempora libero nulla cum.
            Porro, deleniti. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sunt corporis neque reiciendis fugiat labore tempora libero
            nulla cum. Porro, deleniti. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sunt corporis neque reiciendis fugiat labore
            tempora libero nulla cum. Porro, deleniti.
          </li>
        )}
      </ul>
    </div>
  );
};

export default Comment;
