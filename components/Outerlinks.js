import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fa } from "@fortawesome/free-solid-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faTwitter,
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Outerlinks() {
  return (
    <div className="flex justify-center">
      <a
        href="https://twitter.com/jacksonkitsao5"
        className="cursor-pointer mx-2 text-black font-medium text-sm sm:text-lg"
      >
        <FontAwesomeIcon icon={faTwitter} color="blue" />{" "}
        <span className=" inline-block">twitter</span>
      </a>
      {/* github link */}
      <a
        href="https://github.com/jkitsao"
        className="cursor-pointer mx-2 text-black font-medium text-sm sm:text-lg"
      >
        <FontAwesomeIcon icon={faGithub} color="grey" />{" "}
        <span className=" inline-block">github</span>
      </a>
      {/* instagram */}
      <a
        href="https://www.instagram.com/jackson_kitsao/"
        className="cursor-pointer mx-2 text-black font-medium text-sm sm:text-lg"
      >
        <FontAwesomeIcon icon={faInstagram} color="red" />{" "}
        <span className=" inline-block">instagram</span>
      </a>
    </div>
  );
}
