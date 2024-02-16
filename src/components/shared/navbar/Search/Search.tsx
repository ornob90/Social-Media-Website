"use client";
import Image from "next/image";
import React, { useState } from "react";

const Search = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full md:w-[60%] lg:w-[30%] md:ml-16 rounded-xl ">
      <form className="relative ">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsSearching(true)}
          type="text"
          className="w-full py-2 rounded-xl bg-light-gray  placeholder:text-dark-gray  pl-9 text-sm  focus:outline-none"
          placeholder="Search "
        />
        {/* Search Icon  */}
        <div className="h-[30px] md:h-[33px] w-[35px]  rounded-lg  absolute top-[8%] left-[1%]  flex justify-center items-center ">
          <div className="relative w-[18px] h-[18px]">
            <Image src={"/assets/search.svg"} alt="Search Icon" fill />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
