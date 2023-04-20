import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
}) => {
  return (
    <div className="flex flex-col items-center">
      <Icon size={28} />
    </div>
  );
};

export default SidebarItem;
