import Drawer from "@/components/shared/drawer/Drawer";
import Links from "@/components/shared/navbar/Links/Links";
import { sideHomeLinks } from "@/data/navLinks";

const Sidebar = () => {
  return (
    <Drawer>
      <Links links={sideHomeLinks} />
    </Drawer>
  );
};

export default Sidebar;
