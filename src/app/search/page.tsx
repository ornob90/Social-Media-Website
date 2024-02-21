import Tab from "@/components/shared/Tab/Tab";
import Header from "@/components/shared/header/Header";
import Posts from "@/components/ui/post/Posts/Posts";
import Peoples from "@/components/ui/search/Peoples/Peoples";
import { SearchParams } from "@/types/global.types";
import React from "react";

const SearchResults = ({
  searchParams: { tab },
}: {
  searchParams: SearchParams;
}) => {
  return (
    <section className="">
      <Header header={`Search results for '${"Ornob"}'`} />
      <Tab tab={tab || "posts"} />
      {tab === "posts" || !tab ? (
        <div className="mt-8">
          <Posts />
        </div>
      ) : (
        <Peoples />
      )}
    </section>
  );
};

export default SearchResults;
