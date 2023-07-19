import React from "react";
import profile_image from "../assets/images/Sai Kumar profile image.jpg";

function About() {
  const about_text_one = "A passionate Frontend Developer!";
  const about_text_two =
    "  Currently designated as an Application Development Senior Analyst in Accenture with 4.5years of overall experience. I started my career as Avionics Software engineer in verification and Validation, later got shifted to Frontend side of web development, which helped me in having exposure to the complete model.";
  return (
    <div className="flex items-center px-20 w-full h-screen max-[1010px]:flex-col max-[540px]:px-10">
      <div className="w-5/12 text-center max-[1010px]:w-3/4">
        <img
          src={profile_image}
          alt="profile_image"
          className="w-3/4 h-3/5 rounded-lg max-[1010px]:pt-44 max-[1010px]:pb-14 max-[1010px]:w-5/8 max-[1010px]:h-full"
        />
      </div>
      <div className="w-1/2 text-2xl font-medium text-center tracking-wide text-[#cfd9e1] font-fangsong italic max-[1010px]:w-full max-[1010px]:text-left">
        <div className="text-[#d19c96] font-semibold">{about_text_one}</div>
        <div>{about_text_two}</div>
      </div>
    </div>
  );
}

export default About;
