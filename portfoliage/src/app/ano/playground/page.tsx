import React from "react";
import Link from "next/link";

export default function AnoPlayground() {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-10">Welcome to the Playground! :D</h1>
        <h2 className="text-2xl mb-20">What are we learning today?</h2>
        <div className="">
          {/* Threejs */}
          <Link href="/ano/playground/threejs">
            <button className="rounded-xl bg-[#FFF9F4] text-black text-2xl p-4 hover:text-white hover:bg-[#D1345B] hover:cursor-pointer">Threejs</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

