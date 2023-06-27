import React from "react";
import profile_image from "../assets/images/Sai Kumar profile image.jpg";

function About() {
  const about_text_one = "A passionate Frontend Developer!";
  const about_text_two =
    "  Currently designated as an Application Development Senior Analyst in Accenture with 4.5years of overall experience. I started my career as Avionics Software engineer in verification and Validation, later got shifted to Frontend side of web development, which helped me in having exposure to the complete model.";
  return (
    <div className="flex justify-center items-center px-20 h-screen">
      <div className="text-center">
        <img
          src={profile_image}
          alt="profile_image"
          className="w-3/4 h-3/5 rounded-lg"
        />
      </div>
      <div className="text-2xl font-medium text-center tracking-wide text-[#cfd9e1] font-fangsong italic">
        <div className="text-[#d19c96] font-semibold">{about_text_one}</div>
        <div>{about_text_two}</div>
      </div>
    </div>
  );
}

export default About;
