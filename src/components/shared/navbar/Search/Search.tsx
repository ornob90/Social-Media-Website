"use client";
import Image from "next/image";
import React, { useState } from "react";

const Search = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full md:w-[60%] lg:w-[55%] md:ml-16">
      <form className="relative ">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsSearching(true)}
          type="text"
          className="w-full py-2 border rounded-full border-[#6464644d] pl-4 text-sm md:text-base focus:outline-none"
          placeholder="Search Locations..."
        />
        {/* Search Icon  */}
        <div className="h-[30px] md:h-[33px] w-[35px] bg-primary rounded-full absolute top-[10%] right-[2%] sm:right-[1%] md:right-[2%] flex justify-center items-center ">
          <div className="relative w-[18px] md:w-[20px] h-[18px] md:h-[20px]">
            <Image src={"/assets/search.svg"} alt="Search Icon" fill />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
