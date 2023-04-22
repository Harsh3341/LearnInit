import { IconType } from "react-icons";
import { useRouter } from "next/router";
import { useCallback } from "react";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  onClick,
  icon: Icon,
}) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }
    if (href) {
      router.push(href);
    }
  }, [href, onClick, router]);

  return (
    <div onClick={handleClick} className="flex flex-col items-center">
      <Icon size={28} className="hover:cursor-pointer hover:animate-spin" />
    </div>
  );
};

export default SidebarItem;
