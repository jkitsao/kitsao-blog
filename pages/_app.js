import "styles/tailwind.css";
import "styles/index.css";
import Navbar from "../components/Navbar";
import "typeface-open-sans";
import "typeface-merriweather";
import Router from "next/router"; //nextjs router module
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
//adding font awesome and configurations to load appropriate css first
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

library.add(faBars, faUser, faTwitter, faFacebook);
//exporting the _app component
<link
  href="https://fonts.googleapis.com/css2?family=Galada&display=swap"
  rel="stylesheet"
/>;

export default function MyApp({ Component, pageProps }) {
  //binding the nproress bar to the app
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());
  return (
    <div className="">
      <Navbar />
      <Component {...pageProps} />;
    </div>
  );
}
