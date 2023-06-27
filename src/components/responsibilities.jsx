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
    <div className="flex justify-center items-center px-20 w-full h-screen">
      <div className=" w-2/5 text-center">
        <img
          src={responsibilities_image}
          alt="responsibilities_image"
          className="w-3/4 h-3/5 rounded-lg"
        />
      </div>
      <div className="w-3/5 text-2xl font-medium tracking-wide text-[#cfd9e1] font-fangsong italic">
        {data.map((item) => (
          <div className="p-2">{item.resp}</div>
        ))}
      </div>
    </div>
  );
}

export default Responsibilities;
