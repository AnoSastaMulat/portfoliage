import React from "react";
import Link from "next/link";

export default function AnoPage() {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-16">This is the aNO page!</h1>
        <Link href="ano/playground">
          <button className="rounded-xl bg-[#FFF9F4] text-black text-2xl p-4 hover:text-white hover:bg-[#D1345B] hover:cursor-pointer">Enter my playground.</button>
        </Link>
      </div>
    </div>
  );
}

