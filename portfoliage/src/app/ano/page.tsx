import React from "react";
import Link from "next/link";

export default function AnoPage() {
  return (
    <div className="w-full relative overflow-hidden font-jakarta">
      <Link href="/">
        <button className="absolute rounded-xl border text-white p-4 hover:text-black hover:bg-white hover:cursor-pointer">Back to Portfoliage</button>
      </Link>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-16">This is the ANO page!</h1>
        <Link href="ano/playground">
          <button className="rounded-xl bg-[#FFF9F4] text-black text-2xl p-4 hover:text-white hover:bg-[#D1345B] hover:cursor-pointer">Enter my playground.</button>
        </Link>
      </div>
    </div>
  );
}

