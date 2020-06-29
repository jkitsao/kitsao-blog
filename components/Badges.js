import React, { useState } from "react";

export default function Badges() {
  const [tags, setTags] = useState([
    "Javascript",
    "Html",
    "Css",
    "Git",
    "nodejs",
    "Jquery",
    "bootstrap",
    "React",
    "Tailwindcss",
    "Nextjs",
    "Express",
  ]);
  return (
    <div className=" bg-gray-900 flex px-2 overflow-scroll">
      {tags.map((tag) => (
        <span
          className="text-xs bg-grey-400 p-2 text-green-500 mx-2 block"
          key={tag}
        >
          <span className="text-blue-500">#</span>
          {tag}
        </span>
      ))}
    </div>
  );
}
