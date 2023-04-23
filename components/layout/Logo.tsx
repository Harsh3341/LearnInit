import Image from "next/image";

const Logo = ({ width, height }: any) => {
  return (
    <div className="flex justify-center items-center h-full">
      <Image
        src="/logo.png"
        alt="logo"
        width={width}
        height={height}
        placeholder="blur"
        blurDataURL="/logo.png"
      />
    </div>
  );
};

export default Logo;
