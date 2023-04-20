import Logo from "./Logo";
import NotificationIcon from "./NotificationIcon";
import ProfileIcon from "./ProfileIcon";
import Searchbar from "./Searchbar";

const Topbar = () => {
  return (
    <div className="h-full flex items-center justify-between">
      <Logo />
      <div className="h-full flex items-center w-4/6 justify-between">
        <Searchbar />
        <div className="rounded-3xl h-full bg-white bg-opacity-20 border border-black/20 w-1/5 flex justify-evenly">
          <NotificationIcon />
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
