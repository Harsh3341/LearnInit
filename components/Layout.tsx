interface LayoutProps {
  children: React.ReactNode;
}

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "./layout/Topbar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="flex h-full bg-black w-full opacity-80 p-10 flex-col gap-8">
        <div className="h-14">
          <Topbar />
        </div>
        <div className="flex h-full w-full items-center">
          <Sidebar />
          <div className="flex flex-wrap justify-evenly ">hi</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
