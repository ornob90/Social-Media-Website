import Button from "@/components/html/Button/Button";
import Image from "next/image";
import React from "react";

const PostForm = () => {
  return (
    <form className="mt-4 mb-8">
      <textarea
        name=""
        id=""
        placeholder="What's happening?"
        className="w-full lg:w-[49%] min-h-[150px] focus:outline-none bg-light-gray pl-4 py-4 placeholder:text-base md:placeholder:text-md rounded-lg"
      />
      <div className=" grid w-full h-full grid-cols-2  md:grid-cols-3 gap-4 mt-5">
        {[1, 2, 3].map((val) => (
          <div
            className="relative  h-[120px] min-[400px]:h-[150px] min-[500px]:h-[170px] min-[570px]:h-[190px] md:h-[170px] lg:h-[200px] rounded-lg"
            key={val}
          >
            <Image
              src="https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="post image"
              fill
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-end gap-4 items-center mt-7">
        <Button className="bg-gray-200 text-black px-4 py-[7px] rounded-lg text-sm font-semibold">
          Discard
        </Button>
        <Button className="bg-primary text-white px-4 py-[7px] rounded-lg text-sm font-semibold">
          Post
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
