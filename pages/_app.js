import "styles/tailwind.css";
import "styles/index.css";
import Navbar from "../components/Navbar";
import "typeface-open-sans";
import "typeface-merriweather";
import Router from "next/router"; //nextjs router module
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
export default function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());
  return (
    <>
      <Navbar />
      <Component {...pageProps} />;
    </>
  );
}
