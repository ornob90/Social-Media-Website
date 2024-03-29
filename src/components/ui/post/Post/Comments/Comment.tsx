import ProfilePic from "@/components/shared/profilePic/ProfilePic";

const Comment = () => {
  return (
    <div className="grid grid-cols-12 items-start  py-2 w-[90%]">
      <div className="col-span-1 w-max">
        <ProfilePic />
      </div>
      <ul className="col-span-11 flex flex-col justify-between">
        <li className="font-semibold mb-3">
          Julie Chang
          <span className="text-dark-gray text-[12px] ml-2  font-normal">
            2 weeks ago
          </span>
        </li>
        <li className="dark:text-white text-[12px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis
          neque reiciendis fugiat labore tempora libero nulla cum. Porro,
          deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sunt corporis neque reiciendis fugiat labore tempora libero nulla cum.
          Porro, deleniti. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sunt corporis neque reiciendis fugiat labore tempora libero
          nulla cum. Porro, deleniti.
        </li>
      </ul>
    </div>
  );
};

export default Comment;
