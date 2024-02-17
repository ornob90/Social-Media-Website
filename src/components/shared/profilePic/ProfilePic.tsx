const ProfilePic = ({ className }: { className?: string }) => {
  return (
    <p
      className={`border-2 border-black  rounded-full 
        w-[30px] h-[30px] md:h-[33px] md:w-[33px] ${className}`}
    ></p>
  );
};

export default ProfilePic;
