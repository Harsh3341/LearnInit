import Image from "next/image";
import { signOut } from "next-auth/react";
import { useState } from "react";

const ProfileIcon = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex items-center justify-center md:h-full w-2/4">
      <div className="relative z-10 group flex md:flex-row flex-col md:-mx-4">
        <Image
          src="/background/profileicon.jpg"
          alt="profile icon"
          width={50}
          height={50}
          className="rounded-full flex items-center my-1 text-gray-80 md:mx-4 md:my-0 hover:cursor-pointer"
          placeholder="blur"
          blurDataURL="/background/profileicon.jpg"
          onClick={() => setToggle(!toggle)}
        />

        <ul
          className={`absolute right-2 top-8 hidden text-gray-700 pt-1 ${
            toggle ? "group-hover:block" : ""
          }`}
        >
          <li>
            <a
              className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="/profile"
            >
              Profile
            </a>
          </li>
          <li onClick={() => signOut()}>
            <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap hover:cursor-pointer">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileIcon;
