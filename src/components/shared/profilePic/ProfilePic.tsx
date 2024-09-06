import AddProfilePicBtn from "@/components/html/Button/AddProfilePicBtn";
import SignOutBtn from "@/components/html/Button/SignOutBtn";
import { Image } from "@nextui-org/image";
import { IoIosAddCircle } from "react-icons/io";

interface ProfilePicProps {
  className?: string;
  squareShape?: boolean;
  forNav?: boolean;
  addPlusBtn?: boolean;
}

const ProfilePic = ({
  className,
  squareShape,
  forNav,
  addPlusBtn,
}: ProfilePicProps) => {
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
          <li>
            <SignOutBtn />
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div
      className={`border-2 relative border-black  ${
        squareShape ? " rounded-md" : "rounded-full"
      } 
         ${className || "w-[30px] h-[30px] md:h-[33px] md:w-[33px]"}`}
    >
      {addPlusBtn && <AddProfilePicBtn />}
    </div>
  );
};

export default ProfilePic;
