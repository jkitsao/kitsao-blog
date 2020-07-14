import React from "react";
import Link from "next/link";
// import Logo from "./Logo";
export default function Navbar() {
  return (
    <nav className=" bg-black flex sticky top-0 z-10 justify-center py-3 lg:py-4 ">
      {/* <span className="cursor-pointer">
        <img src="/image.svg" className="h-8 sm:h-10 inline-block m-0" />
      </span> */}
      <span
        className="logo-text text-white text-xl sm:text-3xl text-indigo-500 font-hairline"
        // style={{ fontFamily: "Galada', cursive" }}
      >
        mydevpal.com
      </span>
    </nav>
  );
}
