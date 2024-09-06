import Header from "@/components/shared/header/Header";
import PostSkeleton from "@/components/skeletons/PostSkeleton";
import React from "react";

const loading = () => {
  return (
    <main>
      <Header header="Home" />
      <section className="flex flex-col gap-y-10">
        {[1, 2, 3, 4, 5].map((p) => (
          <PostSkeleton key={p} />
        ))}
      </section>
    </main>
  );
};

export default loading;
