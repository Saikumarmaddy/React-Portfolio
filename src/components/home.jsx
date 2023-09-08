import React from "react";
import CV from "../assets/docs/Sai_Kumar_Maddala.pdf";
import profile_image from "../assets/images/Sai Kumar profile image.jpg";
// import Linkedin from "./linkedin_badge";

function Home() {
  const opening_line = "Hello,";
  const greeting = "I am ";
  const resource_name = "Sai Kumar,";
  const role = "Frontend Developer";
  const download_cv = "Download CV";
  // const quotation_one =
  //   "Websites promote you 24/7: No employee will do that. - Paul Cookson";
  // const quotation_two =
  //   "If You Think Math is Hard Try Web Design. - Pixxelznet";
  const quotation_three =
    "Your website is the center of your digital ecosystem, like a brick and mortar location, the experience matters once a customer enters, just as much as the perception they have of you before they walk through the door.";
  const quotation_three_sub = "- Leland Dieno";
  return (
    <section className="w-full px-20 max-[650px]:px-8 max-[450px]:px-5 max-[390px]:px-2">
      <div className="h-47vh p-4 flex justify-between items-center max-[1400px]:flex-col max-[800px]:justify-center">
        <div className="w-45per h-1/5 text-center max-[1010px]:w-3/4">
          <img
            src={profile_image}
            alt="profile_image"
            className="w-9/12 h-4/6 rounded-lg max-[1010px]:pt-44 max-[1010px]:pb-14 max-[1010px]:w-6/8 max-[800px]:w-full max-[1010px]:h-full max-[1010px]:rounded-2xl"
          />
        </div>
        <div className="h-47vh p-4 my-20 flex flex-col justify-center max-[1040px]:text-xl">
          <div className="font-serif p-2">
            <div className="py-4 text-5xl text-white max-[945px]:text-2xl">
              {opening_line}
            </div>
            <div>
              <span className="py-4 text-6xl text-[#cfd9e1] font-bold max-[1035px]:text-7xl max-[850px]:text-6xl max-[760px]:text-5xl max-[650px]:text-4xl max-[470px]:text-3xl">
                {greeting}
              </span>
              <span className="py-4 text-8xl text-[#c47842] font-bold max-[1035px]:text-7xl max-[850px]:text-6xl max-[760px]:text-5xl max-[650px]:text-4xl max-[470px]:text-3xl bg-gradient-to-r from-[#54B4D3] to-[#14A44D] bg-clip-text text-transparent">
                {resource_name}
              </span>
            </div>
            <div className="py-4 text-5xl text-[#fc8079] font-semibold max-[945px]:text-3xl max-[850px]:text-3xl max-[470px]:text-2xl">
              {role}
            </div>
          </div>
          <div className="px-2 block">
            <button
              className="px-4 py-2 my-3 text-xl tracking-wide rounded-md bg-[#fc8079] border-2 border-transparent text-white font-semibold
              hover:bg-transparent hover:border-2 hover:border-[#fc8079] hover:font-bold hover:tracking-wide max-[945px]:text-lg"
            >
              <a href={CV} download="" target="_blank" rel="noreferrer">
                {download_cv}
              </a>
            </button>
          </div>
        </div>
        {/* <div className="pt-14">
          {<Linkedin /> ? <Linkedin /> : <h6>"Loading..."</h6>}
        </div> */}
      </div>
      <div className="w-full h-37vh px-3 py-52 flex flex-col justify-center items-center max-[1400px]:pb-20 max-[1400px]:pt-0">
        <div className="grow w-11/12 flex items-center py-1 text-3xl font-normal text-left tracking-wide text-[#cfd9e1] italic max-[1330px]:text-2xl max-[1160px]:w-full max-[945px]:text-2xl max-[1200px]:text-left max-[540px]:text-xl max-[450px]:text-lg">
          {quotation_three}
        </div>
        <div className="grow w-11/12 text-3xl font-medium text-right tracking-wide text-[#fc8079] italic max-[1330px]:text-2xl max-[945px]:text-2xl max-[540px]:text-xl max-[450px]:text-base">
          {quotation_three_sub}
        </div>
      </div>
    </section>
  );
}

export default Home;
