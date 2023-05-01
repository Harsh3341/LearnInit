import { IoMdNotificationsOutline } from "react-icons/io";

const NotificationIcon = () => {
  return (
    <div className="flex items-center justify-center md:h-full hover:cursor-pointer w-2/4">
      <IoMdNotificationsOutline
        size={28}
        className="hover:origin-bottom hover:-rotate-12"
      />
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-600 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-stone-800"></span>
      </span>
    </div>
  );
};

export default NotificationIcon;
