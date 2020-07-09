import React from "react";
import Link from "next/link";
// import Logo from "./Logo";
export default function Navbar() {
  return (
    <nav className=" bg-black flex sticky top-0 z-10 justify-center py-4 ">
      <span className="cursor-pointer">
        <img src="/image.svg" className="h-8 sm:h-10 inline-block m-0" />
      </span>
      <span className="text-white text-xl sm:text-2xl font-bold text-orange-500">
        Devcrib:developers home
      </span>
    </nav>
  );
}
