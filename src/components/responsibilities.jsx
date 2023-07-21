import React from "react";
import responsibilities_image from "../assets/images/responsibilities.webp";

function Responsibilities() {
  const data = [
    {
      resp: "• Active involvement in leading the team by taking the ownership of assigned tasks.",
    },
    {
      resp: "• Ensure to deliver the assigned tasks on time with no effecting the project deadlines.",
    },
    {
      resp: "• Experience in working Agile environment and have a good understanding in work management tools like Jira.",
    },
    {
      resp: "• Responsible in developing web applications with tech stack included ReactJS, Tailwind CSS, Stencil, JavaScript.",
    },
    {
      resp: "• Responsible in developing test cases for the code developed, to ensure quality of the code.",
    },
  ];
  return (
    <div className="flex justify-center items-center px-20 w-full h-screen max-[1010px]:flex-col max-[1010px]:justify-evenly max-[1010px]:pt-44 max-[730px]:px-6 max-[440px]:h-full">
      <div className=" w-2/5 text-center justify-center max-[912px]:w-3/5 max-[440px]:w-4/5">
        <img
          src={responsibilities_image}
          alt="responsibilities_image"
          className="w-3/4 h-3/5 rounded-lg max-[1010px]:w-full max-[1010px]:h-full"
        />
      </div>
      <div className="w-3/5 text-2xl font-medium tracking-wide text-[#cfd9e1] font-fangsong italic max-[1010px]:w-full max-[912px]:text-xl max-[440px]:text-lg">
        {data.map((item) => (
          <div className="p-2">{item.resp}</div>
        ))}
      </div>
    </div>
  );
}

export default Responsibilities;
