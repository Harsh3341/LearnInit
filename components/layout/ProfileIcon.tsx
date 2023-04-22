import Image from "next/image";

const ProfileIcon = () => {
  return (
    <div className="flex items-center justify-center md:h-full w-2/4">
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
  );
};

export default ProfileIcon;
