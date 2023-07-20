import Image from "next/image";
import { signOut } from "next-auth/react";
import { useState } from "react";

const ProfileIcon = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <div className="flex items-center justify-center md:h-full w-2/4">
      <div className="relative z-10 group flex md:flex-row flex-col md:-mx-4">
        <div
          className="rounded-full flex items-center my-1 text-gray-80 md:mx-4 md:my-0 hover:cursor-pointer"
          onClick={handleToggleDropdown}
        >
          <Image
            src="/background/profileicon.jpg"
            alt="profile icon"
            width={50}
            height={50}
            className="rounded-full"
            placeholder="blur"
            blurDataURL="/background/profileicon.jpg"
          />
        </div>

        {showDropdown && (
          <ul className="absolute right-2 top-8 text-gray-700 pt-1">
            <li>
              <a
                className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="/profile"
              >
                Profile
              </a>
            </li>
            <li>
              <button
                className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap hover:cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProfileIcon;
