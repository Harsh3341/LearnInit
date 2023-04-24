import { IconType } from "react-icons";

interface CategoriesItemProps {
  name: string;
  icon: IconType;
  active: string;
  handleActive: (name: string) => void;
  label: string;
}

const CategoriesItem: React.FC<CategoriesItemProps> = ({
  name,
  icon: Icon,
  active,
  handleActive,
  label,
}) => {
  return (
    <div
      className={`flex gap-2 items-center bg-black bg-opacity-20 rounded-3xl p-1 hover:cursor-pointer border border-black/20 shadow-inner ${
        active === label ? "bg-white border-b-0" : ""
      }`}
      onClick={() => handleActive(label)}
    >
      <Icon size={20} />
      <p className="text-sm">{name}</p>
    </div>
  );
};

export default CategoriesItem;
