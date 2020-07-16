// import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Badges from "../components/Badges";
// import Outerlinks from "./Outerlinks";
import Bio from "components/Bio";

export default function Layout({ children }, props) {
  const { pathname } = useRouter();
  const isRoot = pathname === "/";
  const [letterIsOpen, setLetterIsOpen] = useState(false);
  const header = isRoot ? (
    <span className=" sm:px-5 py-2">
      {/* <Badges /> */}
      <Bio />
    </span>
  ) : null; //(
  //   <>
  //     <h1 className="mb-2 py-2 mt-1">
  //       <span className="text-xl font-hairline">
  //         <Outerlinks />
  //       </span>
  //     </h1>
  //   </>
  // );
  // console.log(props);

  // const banner = isRoot ? <Lettertoggler /> : null;
  return (
    <div className="max-w-screen-lg px-2 mx-auto">
      {/* {banner} */}
      <header className="bg-grey-900 px-3 p-0 "> {header}</header>

      <main className="my-2 ">{children}</main>
      <footer className="text-xs flex w-full justify-center align-middle">
        <div>
          © {new Date().getFullYear()}, Built by{" "}
          <a target="_blank" href="https://github.com/jkitsao">
            Jackson kitsao
          </a>{" "}
          &#128293;
        </div>
      </footer>
    </div>
  );
}
