import Trending from "@/components/ui/trending/Trending";
import WhoToFollow from "@/components/ui/trending/WhoToFollow";
import React from "react";

const Default = () => {
  return (
    <section className=" w-full sticky top-[5vw]     flex flex-col gap-y-4 rounded-xl">
      <WhoToFollow />
      <Trending />
    </section>
  );
};

export default Default;
