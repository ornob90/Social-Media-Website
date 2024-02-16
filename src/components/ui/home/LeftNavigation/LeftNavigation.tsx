import Links from "@/components/shared/navbar/Links/LinksOld";
import { sideHomeLinks } from "@/data/navLinks";

const LeftNavigation = () => {
  return (
    <aside className="col-span-2 min-h-[400px] h-screen bg-white py-4 px-2 rounded-md">
      <Links navLinks={sideHomeLinks} flexCol />
    </aside>
  );
};

export default LeftNavigation;
