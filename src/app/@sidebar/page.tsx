import Drawer from "@/components/shared/drawer/Drawer";
import Links from "@/components/shared/navbar/Links/Links";
import { sideHomeLinks } from "@/data/navLinks";
import Link from "next/link";

const Sidebar = async () => {
  return (
    <Drawer>
      <div className="flex flex-col justify-between h-[calc(100vh-60px)] ">
        <Links links={sideHomeLinks} />
        <Link
          href={"/create"}
          className="w-[90%]  flex  justify-center mx-auto bg-primary text-white py-2 rounded-md text-sm mb-[60px]"
        >
          Create
        </Link>
      </div>
    </Drawer>
  );
};

export default Sidebar;
