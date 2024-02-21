import Drawer from "@/components/shared/drawer/Drawer";
import Links from "@/components/shared/navbar/Links/Links";
import { sideHomeLinks } from "@/data/navLinks";
import { SearchParams } from "@/types/global.types";

const Sidebar = ({ searchParams }: SearchParams) => {
  return (
    <Drawer className="flex  flex-col justify-between h-[calc(100vh-60px)] ">
      <Links searchParams={{ searchParams }} links={sideHomeLinks} />
      <button className="w-[90%] mx-auto bg-primary  text-white py-2 rounded-md text-sm mb-[60px]">
        Create
      </button>
    </Drawer>
  );
};

export default Sidebar;
