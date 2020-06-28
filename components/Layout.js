import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }, props) {
  const { pathname } = useRouter();
  const isRoot = pathname === "/";

  const header = isRoot ? (
    <span className=" px-8">
      <Link href="/">
        <a>
          <p className="text-2xl text-left text-yellow-800 leading-none">
            Devcrunch is a fun and practical web development guide
          </p>
        </a>
      </Link>
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
      <header>{header}</header>
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
