import Comment from "@/components/shared/postLinks/Comment";
import Like from "@/components/shared/postLinks/Like";
import Share from "@/components/shared/postLinks/Share";
import ProfilePic from "@/components/shared/profilePic/ProfilePic";
import Image from "next/image";
import React from "react";

const Post = ({ value }) => {
  return (
    <div className="dark:text-white">
      {/* Header and Name  */}
      <header className="flex  items-center gap-2 h-max py-2 ">
        <ProfilePic />
        <ul className="flex flex-col justify-between">
          <li className="font-semibold">Julie Chang</li>
          <li className="text-dark-gray text-sm">@juliec . 11m</li>
        </ul>
      </header>
      {/* Content  */}
      <div>
        <p className="lg:w-[90%] mt-3 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
          consequuntur nulla fuga fugit. Necessitatibus quisquam, sunt est
          soluta facilis ipsa tenetur nemo sed provident veniam enim, cupiditate
          perferendis aspernatur similique itaque quia ex fugit nobis aperiam
          eligendi dolor aut nostrum? Eaque laboriosam cum, iure eligendi
          necessitatibus perspiciatis id blanditiis magnam.
        </p>
        {value % 3 === 0 && (
          <div className="relative w-full lg:w-[90%] h-[350px] md:h-[400px] lg:h-[450px] object-cover mt-5 rounded-md">
            <Image
              src="https://images.unsplash.com/photo-1521575107034-e0fa0b594529?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9zdHxlbnwwfHwwfHx8MA%3D%3D"
              fill
              alt="Alternate Image"
              className="rounded-md "
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
      </div>

      {/* Like Share Comment  */}
      <div className="flex gap-10 text-dark-gray mt-3">
        <Like />
        <Comment />
        <Share />
      </div>
    </div>
  );
};

export default Post;
