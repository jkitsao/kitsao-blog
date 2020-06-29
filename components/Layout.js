import Link from "next/link";
import { useRouter } from "next/router";
import Badges from "../components/Badges";
import Outerlinks from "./Outerlinks";
export default function Layout({ children }, props) {
  const { pathname } = useRouter();
  const isRoot = pathname === "/";

  const header = isRoot ? (
    <span className=" sm:px-8 py-2 pt-2">
      <p className="text-xl leading-normal sm:text-2xl text-left text-purple-900 sm:leading-none font-normal text-center">
        Fun, practical and engaging web development blogs and stories
      </p>
      <Badges />
    </span>
  ) : (
    <h1 className="mb-2">
      <span className="text-xl font-hairline no-underline">
        <Outerlinks />
      </span>
    </h1>
  );
  console.log(props);
  return (
    <div className="max-w-screen-lg px-4  mx-auto">
      <header className="mb-0 bg-gray-300 px-3 shadow-lg mt-3 lg:py-5">
        {header}
      </header>
      <main className="my-2 ">{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built by{" "}
        <a target="_blank" href="https://github.com/jkitsao">
          Jackson kitsao
        </a>{" "}
        &#128293;
      </footer>
    </div>
  );
}
