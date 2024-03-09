const ProfilePic = ({
  className,
  squareShape,
  forNav,
}: {
  className?: string;
  squareShape?: boolean;
  forNav?: boolean;
}) => {
  if (forNav) {
    return (
      <div className="dropdown dropdown-end hover:bg-white focus-visible:outline-none">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar focus-visible:outline-none"
        >
          <div className="w-10 h-10 border border-black rounded-full"></div>
        </div>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 pl-4"
        >
          <li>Sign Out</li>
        </ul>
      </div>
    );
  }

  return (
    <p
      className={`border-2 border-black  ${
        squareShape ? " rounded-md" : "rounded-full"
      } 
         ${className || "w-[30px] h-[30px] md:h-[33px] md:w-[33px]"}`}
    ></p>
  );
};

export default ProfilePic;
