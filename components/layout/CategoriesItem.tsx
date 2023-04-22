import { IconType } from "react-icons";

interface CategoriesItemProps {
  name: string;
  icon: IconType;
  active?: boolean;
}

const CategoriesItem: React.FC<CategoriesItemProps> = ({
  name,
  icon: Icon,
  active,
}) => {
  return (
    <div className="flex gap-2 items-center bg-white bg-opacity-20 rounded-3xl p-1 hover:cursor-pointer border border-black/20 shadow-inner">
      <Icon size={20} />
      <p className="text-sm">{name}</p>
    </div>
  );
};

export default CategoriesItem;
