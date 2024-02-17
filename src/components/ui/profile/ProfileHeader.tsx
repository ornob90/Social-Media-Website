import Button from "@/components/html/Button/Button";
import ProfilePic from "@/components/shared/profilePic/ProfilePic";

const ProfileHeader = () => {
  return (
    <header className="w-full flex flex-col sm:flex-row  gap-4 sm:gap-0 justify-between items-center">
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <ProfilePic className="w-[80px] h-[80px]" />
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-lg font-bold">Ava hart</h1>
          <p className="text-dark-gray text-sm">Designer.Creator.Explorer</p>
        </div>
      </div>
      <div className="h-max flex gap-4">
        <button className="rounded-lg text-black bg-light-gray px-4 py-2 text-sm">
          Follow
        </button>
        <Button className="rounded-lg px-4 py-2 text-sm">Message</Button>
      </div>
    </header>
  );
};

export default ProfileHeader;
