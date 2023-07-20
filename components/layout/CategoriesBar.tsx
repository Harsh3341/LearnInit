import React, { memo } from "react";
import CategoriesItem from "./CategoriesItem";
import { BiHomeAlt } from "react-icons/bi";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

interface CategoriesBarProps {
  active: string;
  activeCategory: (name: string) => void;
}

const CategoriesBar: React.FC<CategoriesBarProps> = memo(
  ({ active, activeCategory }) => {
    const categories = [
      {
        name: "All",
        label: "all",
        icon: BiHomeAlt,
      },
      {
        name: "Javascript",
        label: "javascript",
        icon: DiJavascript1,
      },

      {
        name: "ReactJs",
        label: "reactjs",
        icon: FaReact,
      },
      {
        name: "NextJs",
        label: "nextjs",
        icon: TbBrandNextjs,
      },
      {
        name: "Tailwind CSS",
        label: "tailwindcss",
        icon: SiTailwindcss,
      },
    ];

    return (
      <div className="w-full overflow-hidden px-4">
        <div className="flex items-center scroll-smooth gap-3 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <CategoriesItem
              key={category.name}
              name={category.name}
              icon={category.icon}
              active={active}
              handleActive={activeCategory}
              label={category.label}
            />
          ))}
        </div>
      </div>
    );
  }
);

export default CategoriesBar;
