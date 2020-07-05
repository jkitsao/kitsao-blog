import Image from "./Image";
import { getSiteMetaData } from "utils/helpers";

export default function Bio() {
  const { author, social } = getSiteMetaData();

  return (
    <div className="flex flex-wrap sm:flex-no-wrap items-center mb-10">
      {/* <Image
        className="flex-shrink-0 w-12 h-12 mb-0 mr-3 rounded-full align-top"
        src={require("../content/assets/profile.png")}
        previewSrc={require("../content/assets/profile.png")}
        alt="Profile"
      /> */}
      <div>
        <p className="mb-0 text-lg sm:text-lg">
          Hello there and welcome to Devcrunch a Blog by <b>{author.name}</b>{" "}
          {author.summary}{" "}
          <a href={`https://twitter.com/${social.twitter}`}>
            Follow me on twitter
          </a>
        </p>
      </div>
    </div>
  );
}
