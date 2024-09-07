import Header from "@/components/shared/header/Header";
import PostSkeleton from "@/components/skeletons/PostSkeleton";
import React from "react";

const loading = () => {
  return (
    <main className="p-8 bg-white mt-[1px] rounded-lg">
      <Header header="Home" className="" />
      <section className="flex flex-col gap-y-10">
        {[1, 2, 3, 4, 5].map((p) => (
          <PostSkeleton key={p} />
        ))}
      </section>
    </main>
  );
};

export default loading;
