import { BiHomeAlt } from "react-icons/bi";
import { MdQuiz, MdCastForEducation } from "react-icons/md";
import SidebarItem from "./SidebarItem";
import { FiSettings } from "react-icons/fi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";

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
      icon: MdCastForEducation,
      label: "Courses",
      href: "/courses",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`md:static md:gap-5 flex flex-col gap-28 absolute top-11 left-0 z-50 transition-all duration-300 ease-in-out ${
        isOpen ? "md:h-full" : "md:h-0"
      }`}
    >
      <div className="w-20 flex items-center justify-center">
        <HiOutlineMenuAlt4
          size={26}
          className="hover:cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
          onClick={toggleSidebar}
        />
      </div>
      <div
        className={`md:w-20 md:rounded-3xl rounded-r-3xl md:h-full bg-white md:bg-opacity-20 bg-opacity-80 border border-black/20 shadow-inner md:static h-96 transition-all duration-300 ease-in-out ${
          isOpen ? "w-20" : "w-0 border-none"
        }`}
      >
        <div className="flex flex-col h-full justify-evenly">
          <div className="flex flex-col h-full justify-evenly">
            {items.map((item) => (
              <SidebarItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                href={item.href}
                toggle={isOpen}
              />
            ))}
          </div>
          <Link
            className="flex flex-col items-center h-full justify-center"
            href="/settings"
          >
            <FiSettings
              size={28}
              className={`hover:cursor-pointer hover:animate-spin ${
                isOpen ? "" : "hidden"
              }`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
