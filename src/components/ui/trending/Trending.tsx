import React from "react";

const Trending = () => {
  return (
    <section className=" bg-white  p-4 rounded-xl flex flex-col gap-y-6">
      <h2 className=" text-xl font-semibold">Trending Posts</h2>
      <section className="flex flex-col gap-y-4">
        {[1, 2, 3, 4].map((v) => (
          <Hashtag key={v} />
        ))}
      </section>
    </section>
  );
};

function Hashtag() {
  return (
    <section>
      <p className=" font-semibold">#endregion</p>
      <p className=" text-gray-400 text-sm">2 posts</p>
    </section>
  );
}

export default Trending;
