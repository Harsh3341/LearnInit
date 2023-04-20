interface LayoutProps {
  children: React.ReactNode;
}

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "./layout/Topbar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="flex h-full w-full p-10 flex-col gap-8 bg-white/30">
        <div className="h-14">
          <Topbar />
        </div>
        <div className="flex h-5/6 w-full items-center justify-between">
          <Sidebar />
          <div className="rounded-3xl w-11/12 bg-white bg-opacity-20 overflow-auto h-full p-7 scrollbar-hide border border-black/20 shadow-inner">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
