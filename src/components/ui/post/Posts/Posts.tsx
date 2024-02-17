import React from "react";
import Post from "../Post/Post";

const Posts = () => {
  return (
    <section className="flex flex-col gap-[60px]">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((post) => (
        <Post key={post} value={post} />
      ))}
    </section>
  );
};

export default Posts;
