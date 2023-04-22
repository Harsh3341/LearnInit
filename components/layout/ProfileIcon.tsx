import Image from "next/image";

const ProfileIcon = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Image
        src="/background/profileicon.jpg"
        alt="profile icon"
        width={50}
        height={50}
        className="rounded-full"
      />
    </div>
  );
};

export default ProfileIcon;
