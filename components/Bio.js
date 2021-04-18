import Image from "./Image";
import { getSiteMetaData } from "utils/helpers";
import Lettertoggler from "components/newsletter/Lettertoggler";
export default function Bio() {
  const { author, social, title } = getSiteMetaData();

  return (
    <div className=" my-1">
      {/* <Image
        className="flex-shrink-0 w-12 h-12 mb-0 mr-3 rounded-full align-top"
        src={require("../content/assets/profile.png")}
        previewSrc={require("../content/assets/profile.png")}
        alt="Profile"
      /> */}
      <div className="">{/* <Lettertoggler /> */}</div>
      {/* <div>
        <p className="mb-1 my-2 text-sm  sm:text-lg">
          Html,css javascript and web development tutorials by{" "}
          <b>{author.name}</b> {author.summary}{" "}
          <a href={`https://twitter.com/${social.twitter}`}>
            Follow me on twitter
          </a>
        </p>
      </div> */}
    </div>
  );
}
