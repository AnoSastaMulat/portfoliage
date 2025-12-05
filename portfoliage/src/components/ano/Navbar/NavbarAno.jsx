"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export const NavbarAno = React.memo(function NavbarAno() {
  return (
    <div className="w-full relative flex overflow-hidden bg-[#FFF9F4]">
      <Link href="/ano">
        <button className="rounded-xl bg-[#FFF9F4] text-black text-2xl p-4 hover:font-bold hover:underline hover:cursor-pointer m-4">ANO</button>
      </Link>
      <Link href="/ano/playground">
        <button className="rounded-xl border bg-[#FFF9F4] text-black text-2xl p-4 hover:text-white hover:bg-[#D1345B] hover:cursor-pointer m-4">playground</button>
      </Link>
    </div>
  );
});