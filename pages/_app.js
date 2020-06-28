import "styles/tailwind.css";
import Navbar from "../components/Navbar";
import "typeface-open-sans";
import "typeface-merriweather";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />;
    </>
  );
}
