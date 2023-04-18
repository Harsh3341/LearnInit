import { BiHomeAlt, BiHistory } from "react-icons/bi";
import { MdQuiz } from "react-icons/md";
import SidebarItem from "./SidebarItem";
import { FiSettings } from "react-icons/fi";

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
    <div className="rounded-3xl w-20 h-full bg-neutral-950 bg-opacity-60">
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
        <div className="flex flex-col items-center h-full justify-center">
          <FiSettings size={28} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
