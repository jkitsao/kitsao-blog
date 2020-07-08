// import Link from "next/link";
import { useRouter } from "next/router";
import Badges from "../components/Badges";
import Outerlinks from "./Outerlinks";
export default function Layout({ children }, props) {
  const { pathname } = useRouter();
  const isRoot = pathname === "/";

  const header = isRoot ? (
    <span className=" sm:px-8 py-2">
      <Badges />
    </span>
  ) : (
    <>
      <h1 className="mb-2 py-2 lg:py-2">
        <span className="text-xl font-hairline">
          <Outerlinks />
        </span>
      </h1>
    </>
  );
  // console.log(props);
  const banner = isRoot ? (
    <div className="py-4">
      <h2 className="text-xl leading-relaxed sm:text-4xl text-left sm:leading-none text-center text-indigo-900">
        Fun, practical and engaging web development blogs and stories &#128293;
      </h2>
    </div>
  ) : null;
  return (
    <div className="max-w-screen-lg px-2 mx-auto">
      <header className="mb-0 bg-grey-900 px-3 shadow-lg lg:py-4 mt-3">
        {header}
      </header>
      {banner}
      <main className="my-2 ">{children}</main>
      <footer className="text-xs">
        © {new Date().getFullYear()}, Built by{" "}
        <a target="_blank" href="https://github.com/jkitsao">
          Jackson kitsao
        </a>{" "}
        &#128293;
      </footer>
    </div>
  );
}
