import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className=" bg-black flex align-top sticky top-0 z-10 pl-16 sm:pl-48 lg:64 mb-5">
      <span className="cursor-pointer">
        <Link href="/">
          <h2 className="text-orange-500 text-xl sm:text-3xl">Devcrunch.io</h2>
        </Link>
      </span>
    </nav>
  );
}
