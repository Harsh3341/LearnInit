import Logo from "@/components/layout/Logo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen md:px-14 md:pt-14 px-5 pt-5">
      <div className="backdrop-blur-xl border-t-4 border-x-4 border-white rounded-t-3xl h-full flex-col">
        <div className="w-full">
          <ul className="flex gap-5 justify-end m-5">
            <Link
              className="border border-black p-1 rounded-xl font-bold bg-white/40 hover:bg-black hover:text-white transition ease-in-out delay-150"
              href=""
            >
              SignIn
            </Link>
            <Link
              className="border border-black p-1 rounded-xl font-bold bg-white/40 hover:bg-black hover:text-white transition ease-in-out delay-150"
              href="/"
            >
              Home
            </Link>
          </ul>
        </div>
        <div className="h-full flex">
          <div className="w-2/4 h-full">
            <div className="md:h-1/2 h-1/3">
              <Logo width={150} height={150} />
            </div>
            <div className="flex flex-col justify-center items-center md:px-20 px-5 sm:gap-5 gap-2">
              <h1 className="md:text-5xl font-bold w-full text-right text-2xl">
                Learning-focused alternative to
              </h1>
              <h1 className="md:text-5xl font-bold text-red-500 text-right w-full text-2xl">
                Youtube
              </h1>
              <h1 className="md:text-3xl font-bold text-right w-full">and</h1>
              <h1 className="md:text-5xl font-bold text-red-500 text-right w-full text-2xl">
                Netflix
              </h1>
            </div>
          </div>
          <div className="w-2/4 flex justify-center items-center">
            <Image
              src="/background/edu3.png"
              alt="edu"
              width={550}
              height={550}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
