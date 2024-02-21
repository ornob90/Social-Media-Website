const ProfilePic = ({
  className,
  squareShape,
}: {
  className?: string;
  squareShape?: boolean;
}) => {
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
