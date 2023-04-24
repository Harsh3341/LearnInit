import Image from "next/image";
import Link from "next/link";

const Logo = ({ width, height }: any) => {
  return (
    <div className="flex justify-center items-center h-full">
      <Link href="/home">
        <Image
          src="/logo.png"
          alt="logo"
          width={width}
          height={height}
          placeholder="blur"
          blurDataURL="/logo.png"
        />
      </Link>
    </div>
  );
};

export default Logo;
