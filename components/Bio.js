import Image from "./Image";
import { getSiteMetaData } from "utils/helpers";
import Lettertoggler from "components/newsletter/Lettertoggler";
export default function Bio() {
  const { author, social, title } = getSiteMetaData();

  return (
    <div className="flex flex-wrap sm:flex-no-wrap items-center my-3">
      {/* <Image
        className="flex-shrink-0 w-12 h-12 mb-0 mr-3 rounded-full align-top"
        src={require("../content/assets/profile.png")}
        previewSrc={require("../content/assets/profile.png")}
        alt="Profile"
      /> */}
      <div>
        <Lettertoggler />
        <p className="mb-1 lg:my-3 text-sm sm:text-lg sm:text-lg">
          Hello there and welcome to {title} a Blog by <b>{author.name}</b>{" "}
          {author.summary}{" "}
          <a href={`https://twitter.com/${social.twitter}`}>
            Follow me on twitter
          </a>
        </p>
      </div>
    </div>
  );
}
