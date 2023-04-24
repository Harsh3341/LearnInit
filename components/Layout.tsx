interface LayoutProps {
  children: React.ReactNode;
}

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "./layout/Topbar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen backdrop-blur-xl">
      <div className="flex h-full w-full sm:p-10 p-5 bg-white/30 justify-between relative">
        <Sidebar />
        <div className="flex h-full w-full md:w-11/12 items-center justify-between flex-col gap-5">
          <div className="h-14 w-full">
            <Topbar />
          </div>
          <div className="rounded-s-3xl w-full bg-white bg-opacity-20 overflow-auto h-full md:p-7 py-7 border border-black/20 shadow-inner scroll-smooth  overflow-x-hidden rounded-e-md">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
