import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Image src="/logo.png" alt="logo" width={100} height={100} />
    </div>
  );
};

export default Logo;
