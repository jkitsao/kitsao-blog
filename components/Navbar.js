import React from "react";
import Link from "next/link";
// import Logo from "./Logo";
export default function Navbar() {
  return (
    <nav className=" bg-black flex sticky top-0 z-10 justify-center py-2 lg:py-1 ">
      {/* <span className="cursor-pointer">
        <img src="/image.svg" className="h-8 sm:h-10 inline-block m-0" />
      </span> */}
      <Link href="/">
        <span
          className="logo-text cursor-pointer text-xl sm:text-3xl"
          // style={{ fontFamily: "Galada', cursive" }}
        >
          Tipjarr
        </span>
      </Link>
    </nav>
  );
}
