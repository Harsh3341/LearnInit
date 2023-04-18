import Logo from "./Logo";
import Searchbar from "./Searchbar";

const Topbar = () => {
  return (
    <div className="h-full flex justify-between">
      <Logo />
      <Searchbar />
      <div></div>
    </div>
  );
};

export default Topbar;
