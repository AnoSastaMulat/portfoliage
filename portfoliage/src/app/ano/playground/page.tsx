import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AnoPlayground() {
  return (
    <div className="w-full px-20 pb-67 relative overflow-hidden">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold mt-40 mb-10">Welcome to the Playground! :D</h1>
        <h2 className="text-2xl mb-20">What are we learning today?</h2>
      </div>
      {/* Tools */}
      <div className="flex flex-col mb-20">
        <h2 className="text-4xl font-semibold mb-10">Tools</h2>
        <div className="flex gap-10">
          {/* React */}
          <Link href="/ano/playground/react">
            <button className="flex flex-col justify-between rounded-xl h-full w-80 bg-[#FFF9F4] text-black text-2xl px-10 pt-10 pb-10 hover:text-white hover:bg-[#D1345B] hover:cursor-pointer">
              <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                alt="React Icon" 
                width={320} 
                height={32} 
                className="inline-block mb-2"
              />
              <h2 className="pt-10">React</h2>
              </button>
          </Link>
          {/* Motion.dev */}
          <Link href="/ano/playground/motion">
            <button className="flex flex-col justify-between rounded-xl h-full w-80 bg-[#FFF9F4] text-black text-2xl px-10 pt-10 pb-10 hover:text-white hover:bg-[#D1345B] hover:cursor-pointer">
              <Image 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPznwv7OeqDgGjrlZfT28XyX4J9oJyZ9TYwg&s" 
                alt="Framer Icon" 
                width={320} 
                height={32} 
                className="inline-block mb-2"
              />
              <h2 className="pt-10">Motion.dev</h2>
              </button>
          </Link>
          {/* Threejs */}
          <Link href="/ano/playground/threejs">
            <button className="flex flex-col justify-between rounded-xl h-full w-80 bg-[#FFF9F4] text-black text-2xl px-7 pt-2 pb-10 hover:text-white hover:bg-[#D1345B] hover:cursor-pointer">
              <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg" 
                alt="Threejs Icon" 
                width={320} 
                height={32} 
                className="inline-block mb-2"
              />
              <h2 className="pt-10">Threejs</h2>
              </button>
          </Link>
        </div>
      </div>
      {/* Concepts */}
      <div className="flex flex-col mb-20">
        <h2 className="text-4xl font-semibold mb-10">Concepts</h2>
        <div className="">
          {/* animations */}
          <Link href="/ano/playground/animations">
            <button className="flex flex-col gap-10 rounded-xl bg-[#FFF9F4] text-black text-2xl px-7 pt-7 pb-10 hover:text-white hover:bg-[#D1345B] hover:cursor-pointer">
              <Image 
                src="https://media1.tenor.com/m/_oNO0Db6g3oAAAAd/markiplier-jump.gif" 
                alt="animations Icon" 
                width={320} 
                height={32} 
                className="inline-block mb-2"
              />
              <h2 className="">Animations</h2>
              </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

