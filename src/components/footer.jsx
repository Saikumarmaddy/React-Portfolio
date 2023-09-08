import React from "react";
import Linkedin from "../assets/images/linkedin.png";
import Instagram from "../assets/images/instagram.png";
import Facebook from "../assets/images/facebook.png";

function Footer() {
  const JoinMe = "JOIN ME";
  const MailID = "saikumar.maddala123@gmail.com";
  const Address = "Visakhapatnam, AP, India";
  const worksIn = "Works In:";
  const WorkAddress = "Bengaluru, Karnataka, India";

  return (
    <footer className="flex flex-col justify-center items-center w-full h-72 pb-2 px-10 bg-blue-300 bg-opacity-20 bg-gradient-to-tr from-black max-[565px]:px-5">
      <div className="p-2 rounded-lg max-lg:my-1 max-[1365px]:my-2">
        <span className="flex-none italic text-zinc-200 font-semibold tracking-wider px-5 text-3xl underline max-[565px]:text-2xl">
          {JoinMe}
        </span>
      </div>
      <div className="rounded-lg max-lg:my-1 max-[1365px]:my-2">
        <span className="flex-none italic text-zinc-200 font-semibold tracking-wider px-5 text-lg max-[565px]:text-base">
          {MailID}
        </span>
      </div>
      <div className="rounded-lg max-lg:my-1 max-[1365px]:my-2">
        <span className="flex-none italic text-zinc-200 font-semibold tracking-wider text-sm underline">
          {worksIn}
        </span>
        <span className="flex-none italic text-zinc-200 font-semibold tracking-wider px-2 text-lg max-[565px]:text-base">
          {WorkAddress}
        </span>
      </div>
      <div className="rounded-lg max-lg:my-1 max-[1365px]:my-2">
        <span className="flex-none italic text-zinc-200 font-semibold tracking-wider px-5 text-lg max-[565px]:text-base">
          {Address}
        </span>
      </div>
      <div className="flex py-3">
        <a
          href="https://www.linkedin.com/in/sai-kumar-maddala"
          target="_blank"
          rel="noreferrer"
          className="p-3"
        >
          <img src={Linkedin} alt="linkedin_icon" />
        </a>
        <a
          href="https://www.instagram.com/saikumar_maddy"
          target="_blank"
          rel="noreferrer"
          className="p-3"
        >
          <img src={Instagram} alt="instagram_icon" />
        </a>
        <a
          href="https://www.facebook.com/maddala.saikumar.1"
          target="_blank"
          rel="noreferrer"
          className="p-3"
        >
          <img src={Facebook} alt="facebook_icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
