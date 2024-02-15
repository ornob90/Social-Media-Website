import Input from "@/components/html/Input/Input";
import ProfilePic from "@/components/shared/profilePic/ProfilePic";
import Image from "next/image";

const PostForm = () => {
  return (
    <div className="flex gap-4 items-center mt-2 py-2 px-2 border-2 border-light-gray rounded-lg">
      <div className=" ">
        <ProfilePic />
      </div>
      <div className="relative w-[90%] ">
        <Input className="bg-black" placeholder="Share a post" />
        <div className="absolute w-[25px] h-[25px] right-0 top-0 bg-light-gray  rounded-full ">
          <Image src="/assets/plus.svg" fill alt="Plus Icon" />
        </div>
      </div>
    </div>
  );
};

export default PostForm;
