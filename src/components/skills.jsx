import React from "react";
import ReactJS_Image from "../assets/images/skills/ReactJS.png";
import CSS_Image from "../assets/images/skills/CSS.png";
import NextJS_Image from "../assets/images/skills/NextJS.png";
import Jira_Image from "../assets/images/skills/jiras.png";
import AWS_Image from "../assets/images/skills/aws.png";
import Javascript_Image from "../assets/images/skills/js.png";
import Jest_Image from "../assets/images/skills/jest.png";
import Git_Image from "../assets/images/skills/gits.png";
import HTML_Image from "../assets/images/skills/html5.png";
import Tailwind_Image from "../assets/images/skills/tailwincss.png";
import VS_Code_Image from "../assets/images/skills/vscode.png";

function Skills() {
  const about_text_one = "I ";
  const about_text_two =
    "have got the best opportunities to work on these skills. I've been involving in using these skills in projects with few more add-on frameworks like Stencil aligning to client requirements.";
  // const about_text_three = "4.5";
  // const about_text_four = "Years Of Experience";
  return (
    <div className="flex justify-between items-center w-full px-20 h-screen font-medium text-center text-[#cfd9e1] font-fangsong italic max-[1200px]:flex-col justify-stretch max-[760px]:px-0">
      <div className="w-1/2 text-2xl tracking-wide pr-4per max-[1200px]:w-5/6 max-[1200px]:grow max-[1200px]:pt-44 max-[1120px]:leading-loose text-left">
        <span className="text-[#d19c96] font-semibold italic text-4xl">
          {about_text_one}
        </span>
        <span>{about_text_two}</span>
        <div>
          {/* <span>{about_text_three}</span> */}
          {/* <span>{about_text_four}</span> */}
        </div>
      </div>
      <div className="w-1/2 flex-col text-center font-bold list-none text-xl max-[1200px]:w-5/6">
        <div className="flex w-full justify-center items-center mb-4per">
          <div className="flex items-center w-1/4 pr-4per max-[880px]:w-1/3 max-[540px]:w-1/4">
            <span className="w-2/5">
              <img
                src={ReactJS_Image}
                alt="ReactJS_image"
                className="w-3/4 h-3/5 rounded-lg"
              />
            </span>
            <span className="w-3/5 max-[540px]:text-base">ReactJS</span>
          </div>
          <div className="flex justify-center items-center w-1/4 pr-4per max-[880px]:w-1/3">
            <span className="w-2/5">
              <img src={CSS_Image} alt="CSS_image" className="rounded-lg" />
            </span>
            <span className="w-2/5 max-[540px]:text-base">CSS/LESS</span>
          </div>
          <div className="flex justify-center items-center w-1/4 pr-4per max-[880px]:w-1/3">
            <span className="w-2/5">
              <img
                src={NextJS_Image}
                alt="nextjs_image"
                className="w-3/4 h-3/5 rounded-lg"
              />
            </span>
            <span className="3/5 max-[540px]:text-base">NextJS</span>
          </div>
          <div className="flex items-center w-1/4 pr-4per max-[880px]:hidden">
            <span className="w-2/5">
              <img
                src={Jira_Image}
                alt="jira_image"
                className="w-5/6 h-5/6 rounded-lg"
              />
            </span>
            <span className="3/5">Jira</span>
          </div>
        </div>
        <div className="flex w-full justify-center items-center mb-4per">
          <div className="flex items-center w-1/3 pr-4per min-[880px]:hidden">
            <span className="w-2/5">
              <img
                src={Jira_Image}
                alt="jira_image"
                className="w-5/6 h-5/6 rounded-lg"
              />
            </span>
            <span className="3/5 max-[540px]:text-base">Jira</span>
          </div>
          <div className="flex justify-center items-center w-1/4 pr-4per max-[880px]:w-1/3">
            <span className="w-2/5">
              <img
                src={Javascript_Image}
                alt="js_image"
                className="w-3/4 h-3/5 rounded-lg"
              />
            </span>
            <span className="3/5 max-[540px]:text-base">Javascript</span>
          </div>
          <div className="flex justify-center items-center w-1/4 pr-4per max-[880px]:w-1/3">
            <span className="w-2/5">
              <img
                src={AWS_Image}
                alt="aws_image"
                className="w-3/4 h-3/5 rounded-lg"
              />
            </span>
            <span className="3/5 max-[540px]:text-base">Stencil</span>
          </div>
          <div className="flex justify-center items-center w-1/4 pr-4per max-[880px]:hidden">
            <span className="w-3/5">
              <img
                src={Jest_Image}
                alt="jest_image"
                className="w-3/4 h-3/5 rounded-lg"
              />
            </span>
            <span className="w-3/5 text-left">Jest</span>
          </div>
          <div className="flex items-center w-1/4 pr-4per max-[880px]:hidden">
            <span className="w-2/5">
              <img
                src={Git_Image}
                alt="git_image"
                className="rounded-lg w-3/4 h-3/5"
              />
            </span>
            <span className="3/5 text-left">Git</span>
          </div>
        </div>
        <div className="flex w-full justify-center items-center mb-4per">
          <div className="flex justify-center items-center w-1/3 pr-4per min-[880px]:hidden">
            <span className="w-3/5">
              <img
                src={Jest_Image}
                alt="jest_image"
                className="w-3/4 h-3/5 rounded-lg"
              />
            </span>
            <span className="w-3/5 text-left max-[540px]:text-base">Jest</span>
          </div>
          <div className="flex items-center w-1/3 pr-4per min-[880px]:hidden">
            <span className="w-2/5">
              <img
                src={Git_Image}
                alt="git_image"
                className="rounded-lg w-3/4 h-3/5"
              />
            </span>
            <span className="3/5 text-left max-[540px]:text-base">Git</span>
          </div>
          <div className="flex items-center w-1/4 pr-4per max-[880px]:w-1/3">
            <span className="w-2/5">
              <img
                src={HTML_Image}
                alt="html_image"
                className="w-3/4 h-3/5 rounded-lg"
              />
            </span>
            <span className="3/5 max-[540px]:text-base">HTML</span>
          </div>
          <div className="flex justify-center items-center w-1/4 pr-4per max-[880px]:hidden">
            <span className="w-2/5">
              <img
                src={Tailwind_Image}
                alt="tailwindcss_image"
                className="rounded-lg"
              />
            </span>
            <span className="3/5">Tailwind CSS</span>
          </div>
          <div className="flex justify-center items-center w-1/4 pr-4per max-[880px]:hidden">
            <span className="w-2/5">
              <img
                src={Jest_Image}
                alt="jest_image"
                className="w-3/4 h-3/5 rounded-lg"
              />
            </span>
            <span className="3/5">Cypress</span>
          </div>
          <div className="flex items-center w-1/4 pr-4per max-[880px]:hidden">
            <span className="w-2/5">
              <img
                src={VS_Code_Image}
                alt="vscode_image"
                className="w-3/4 h-3/5 rounded-lg"
              />
            </span>
            <span className="3/5">VS Code</span>
          </div>
        </div>
        <div className="flex w-full mb-4per">
          <div className="flex justify-center items-center w-1/3 pr-4per min-[880px]:hidden">
            <span className="w-2/5">
              <img
                src={Tailwind_Image}
                alt="tailwindcss_image"
                className="rounded-lg"
              />
            </span>
            <span className="3/5 max-[540px]:text-base">Tailwind CSS</span>
          </div>
          <div className="flex justify-center items-center w-1/3 pr-4per min-[880px]:hidden">
            <span className="w-2/5">
              <img
                src={Jest_Image}
                alt="jest_image"
                className="w-3/4 h-3/5 rounded-lg"
              />
            </span>
            <span className="3/5 max-[540px]:text-base">Cypress</span>
          </div>
          <div className="flex items-center w-1/3 pr-4per min-[880px]:hidden">
            <span className="w-2/5">
              <img
                src={VS_Code_Image}
                alt="vscode_image"
                className="w-3/4 h-3/5 rounded-lg"
              />
            </span>
            <span className="3/5 max-[540px]:text-base">VS Code</span>
          </div>
          <div className="flex justify-start items-center w-2/4 pr-4per max-[880px]:hidden">
            <span className="w-2/12">
              <img
                src={AWS_Image}
                alt="aws_image"
                className="w-3/4 h-3/5 rounded-lg"
              />
            </span>
            <span className="10/12">AWS (CodeCommit)</span>
          </div>
        </div>
        <div className="flex justify-start items-center w-2/4 pr-4per min-[880px]:hidden">
          <span className="w-2/12">
            <img
              src={AWS_Image}
              alt="aws_image"
              className="w-3/4 h-3/5 rounded-lg"
            />
          </span>
          <span className="10/12 max-[540px]:text-base">AWS (CodeCommit)</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
