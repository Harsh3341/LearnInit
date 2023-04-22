interface LayoutProps {
  children: React.ReactNode;
}

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "./layout/Topbar";
import CategoriesBar from "./layout/CategoriesBar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="flex h-full w-full p-10 bg-white/30 justify-between">
        <Sidebar />
        <div className="flex h-full w-11/12 items-center justify-between flex-col gap-5">
          <div className="h-14 w-full">
            <Topbar />
          </div>
          <div className="rounded-3xl w-full bg-white bg-opacity-20 overflow-auto h-full p-7 scrollbar-hide border border-black/20 shadow-inner scroll-smooth ">
            <CategoriesBar />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
