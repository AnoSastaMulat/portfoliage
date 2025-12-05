import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ReactAnoPlayground() {
  return (
    <div className="w-full px-20 pb-67 relative overflow-hidden">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold mt-40 mb-10">Think Fast!</h1>
        <h2 className="text-2xl mb-20">just kidding.</h2>
      </div>
      <div className="flex items-center gap-10">
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
          alt="React Icon" 
          width={240} 
          height={32} 
          className="inline-block mb-2"
          />
        <p className="text-2xl/8 text-justify mb-20">So basically, I have learned Frontend development STARTING with using React and I've been coding according to what I needed at the moment (for projects). <br/>Which means, I've really been using React concepts without actually <span className="underline underline-offset-8 decoration-3 decoration-sky-500">understanding</span> what I'm doing. <br/><br/>This page is meant for me to learn about what stuff does what. <br/>(so I don't look dumb when people ask me things)</p>
      </div>
    </div>
  );
}

