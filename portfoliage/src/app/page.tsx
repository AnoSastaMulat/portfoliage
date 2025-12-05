import Image from "next/image";
import Link from "next/link";
import PortfoliageLogo from "../../public/assets/LandingPage/PortfoliageLogo"

export default function Home() {
  return (
    <div className="">
      <div className="relative flex flex-col items-center justify-center bg-zinc-50 dark:bg-black">
        <div className="mt-56 mb-16">
          <PortfoliageLogo />
        </div>
        <h1 className="text-6xl font-bold">WARNING: THIS WEBSITE IS STILL IN PROGRESS!</h1>
        <h2 className="text-4xl mt-8 mb-20">Please wait until mas-mas ganteng kita kerja.</h2>
        <Link href="/ano">
          <button className="rounded-xl bg-[#FFF9F4] text-black text-2xl p-4 hover:text-white hover:bg-[#D1345B] hover:cursor-pointer">aNO pAGE</button>
        </Link>
      </div>
    </div>
  );
}
