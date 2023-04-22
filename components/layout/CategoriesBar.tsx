import CategoriesItem from "./CategoriesItem";
import { BiHomeAlt } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

const CategoriesBar = () => {
  const categories = [
    {
      name: "All",
      icon: BiHomeAlt,
      active: true,
    },
    {
      name: "Javascript",
      icon: DiJavascript1,
      active: false,
    },
    {
      name: "React",
      icon: FaReact,
      active: false,
    },
    {
      name: "Next",
      icon: TbBrandNextjs,
      active: false,
    },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      active: false,
    },
  ];
  return (
    <div className="w-full overflow-hidden">
      <div className="flex items-center scroll-smooth gap-3">
        {categories.map((category) => (
          <CategoriesItem
            key={category.name}
            name={category.name}
            icon={category.icon}
            active={category.active}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesBar;
