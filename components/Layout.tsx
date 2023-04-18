interface LayoutProps {
  children: React.ReactNode;
}

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "./layout/Topbar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="flex h-full bg-black w-full p-10 flex-col gap-8 bg-opacity-80">
        <div className="h-14">
          <Topbar />
        </div>
        <div className="flex h-full w-full items-center justify-between">
          <Sidebar />
          <div className="rounded-3xl w-4/6 bg-neutral-950 bg-opacity-60 overflow-auto h-full p-7 scrollbar-hide">
            {children}
          </div>
          <div className="rounded-3xl w-1/5 h-full bg-neutral-950 bg-opacity-60">
            Hi
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
