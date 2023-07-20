import useCurrentUser from "@/hooks/useCurrentUser";
import Logo from "./Logo";
import NotificationIcon from "./NotificationIcon";
import ProfileIcon from "./ProfileIcon";
import Searchbar from "./Searchbar";
import useLoginModal from "@/hooks/useLoginModal";
import { useCallback } from "react";

const Topbar = () => {
  const { data, error } = useCurrentUser();
  const loginModal = useLoginModal();
  const onClick = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);

  return (
    <>
      <div className="h-full flex items-center md:justify-between justify-evenly">
        <Logo width={100} height={100} />
        <div className="h-full flex items-center md:w-4/6 w-1/4 justify-end">
          {/* <Searchbar /> */}

          <div className="rounded-3xl md:h-full bg-white bg-opacity-20 border border-black/20 md:w-1/5 flex justify-evenly h-3/4 p-2">
            {data?.id ? (
              <>
                <NotificationIcon />
                <ProfileIcon />
              </>
            ) : (
              <div
                className="md:p-1 rounded-xl font-bold w-full hover:bg-black hover:text-white transition ease-in-out delay-150 hover:cursor-pointer text-center"
                onClick={onClick}
              >
                SignIn
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
