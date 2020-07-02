import React from "react";
import Link from "next/link";
import Logo from "./Logo";
export default function Navbar() {
  return (
    <nav className=" bg-black flex sticky top-0 z-10 justify-center">
      <span className="cursor-pointer">
        <Link href="/">
          <div>
            <Logo className="" />
            <h2 className="text-orange-500 text-lg sm:text-4xl inline-block">
              Devcrunch.io
            </h2>
          </div>
        </Link>
      </span>
    </nav>
  );
}
