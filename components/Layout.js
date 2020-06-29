import Link from "next/link";
import { useRouter } from "next/router";
import Badges from "../components/Badges";
export default function Layout({ children }, props) {
  const { pathname } = useRouter();
  const isRoot = pathname === "/";

  const header = isRoot ? (
    <span className=" sm:px-8 pt-2">
      <p className="text-xl leading-normal sm:text-2xl text-left text-yellow-600 sm:leading-none font-normal text-center">
        Fun, practical and engaging web development blogs and stories
      </p>
      <Badges />
    </span>
  ) : (
    <h1 className="mb-2">
      <Link href="/">
        <a className="text-xl text-green-900 font-hairline no-underline">
          Home
        </a>
      </Link>
    </h1>
  );
  // console.log(props);
  return (
    <div className="max-w-screen-lg px-4  mx-auto">
      <header className="mb-0 bg-gray-200 px-5 shadow-lg rounded-lg mt-3">
        {header}
      </header>
      <main>{children}</main>
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
