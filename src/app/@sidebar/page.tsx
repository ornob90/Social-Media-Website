import Drawer from "@/components/shared/drawer/Drawer";
import Links from "@/components/shared/navbar/Links/Links";
import { sideHomeLinks } from "@/data/navLinks";

const Sidebar = () => {
  return (
    <Drawer className="flex  flex-col justify-between h-[calc(100vh-60px)] ">
      <Links links={sideHomeLinks} />
      <button className="w-[90%] mx-auto bg-primary text-white py-1 rounded-md text-sm mb-[60px]">
        Post Now
      </button>
    </Drawer>
  );
};

export default Sidebar;
