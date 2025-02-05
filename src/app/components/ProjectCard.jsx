import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, company, description, Url }) => {
  return (
    <div>
      <div
        className="h-40 rounded-t-xl relative group bg-[#23242b] object-contain"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        onclick="window.open(`${gitUrl}`)"
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#23242b] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={Url}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              ariaHidden="true"
              className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl  bg-[#23242b] py-6 px-4 flex flex-col items-center">
        <h5 className="text-xl font-semibold mb-2 text-center">{title}</h5>
        <h6 class="text-m font-medium mb-1">{company}</h6>
        <p class="text-[#ADB7BE] mt-1 text-xs">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
