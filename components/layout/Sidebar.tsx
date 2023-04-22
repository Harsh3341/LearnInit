import { BiHomeAlt, BiHistory } from "react-icons/bi";
import { MdQuiz } from "react-icons/md";
import SidebarItem from "./SidebarItem";
import { FiSettings } from "react-icons/fi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Link from "next/link";

const Sidebar = () => {
  const items = [
    {
      icon: BiHomeAlt,
      label: "Home",
      href: "/",
    },
    {
      icon: MdQuiz,
      label: "Quiz",
      href: "/quiz",
    },
    {
      icon: BiHistory,
      label: "History",
      href: "/history",
    },
  ];

  return (
    <div className="h-full flex flex-col justify-between gap-5">
      <div className="self-center">
        <HiOutlineMenuAlt4
          size={26}
          className="hover:cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
        />
      </div>
      <div className="rounded-3xl w-20 h-full bg-white bg-opacity-20 border border-black/20 shadow-inner">
        <div className="flex flex-col h-full justify-evenly">
          <div className="flex flex-col h-full justify-evenly">
            {items.map((item) => (
              <SidebarItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                href={item.href}
              />
            ))}
          </div>
          <Link
            className="flex flex-col items-center h-full justify-center"
            href="/settings"
          >
            <FiSettings
              size={28}
              className="hover:cursor-pointer hover:animate-spin"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
