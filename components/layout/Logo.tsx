import Image from "next/image";
import Link from "next/link";

const Logo = ({ width, height }: any) => {
  return (
    <div className="flex justify-center items-center h-full text-center">
      <Link href="/home">
        <Image
          src="/symbol.png"
          alt="logo"
          width={width}
          height={height}
          placeholder="blur"
          blurDataURL="/logo.png"
        />
        Learnify
      </Link>
    </div>
  );
};

export default Logo;
