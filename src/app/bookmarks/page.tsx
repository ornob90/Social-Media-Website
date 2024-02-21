import Header from "@/components/shared/header/Header";
import ProfilePic from "@/components/shared/profilePic/ProfilePic";
import Image from "next/image";
import React from "react";

const BookmarksPage = () => {
  return (
    <section>
      <Header header="Bookmarks" />
      <section className="flex flex-col mt-12 gap-6 ">
        {[1, 2, 3, 4, 5, 6, 7].map((value) => (
          <div key={value} className="flex gap-4  w-full items-start">
            <ProfilePic className="h-[80px] w-[60px]" squareShape />
            <div className="flex flex-col  justify-between w-[85%]">
              <div className="flex justify-between items-center w-full ">
                <h3 className="font-bold text-lg">Elon Mask</h3>
                <form action="">
                  <button>
                    <Image
                      src="/assets/cross.svg"
                      alt="Cross Icon"
                      width={20}
                      height={20}
                    />
                  </button>
                </form>
              </div>
              <p className="text-dark-gray text-sm">1w</p>
              <p className="text-dark-gray text-sm">Female, 25years old</p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default BookmarksPage;
