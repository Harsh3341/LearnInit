import Logo from "./Logo";
import NotificationIcon from "./NotificationIcon";
import ProfileIcon from "./ProfileIcon";
import Searchbar from "./Searchbar";

const Topbar = () => {
  return (
    <div className="h-full flex items-center md:justify-between justify-evenly">
      <Logo width={100} height={100} />
      <div className="h-full flex items-center md:w-4/6 w-1/4 justify-end">
        {/* <Searchbar /> */}
        <div className="rounded-3xl md:h-full bg-white bg-opacity-20 border border-black/20 md:w-1/5 flex justify-evenly h-3/4 p-2">
          <NotificationIcon />
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
