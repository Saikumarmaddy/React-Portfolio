import React from "react";
import CV from "../assets/docs/Sai_Kumar_Maddala.pdf";
import Linkedin from "./linkedin_badge";

function Home() {
  const opening_line = "Hello,";
  const resource_name = "I am Sai Kumar";
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
    <>
      <section className="w-full px-20 pt-10 max-[540px]:px-8">
        <div className="h-47vh p-4 flex justify-between max-[420px]:flex-col max-[800px]:justify-center">
          <div className="h-47vh p-4 flex flex-col justify-center max-[1040px]:text-xl max-[800px]:hidden">
            <div className="font-serif p-2">
              <div className="py-1 text-3xl text-white max-[945px]:text-2xl">
                {opening_line}
              </div>
              <div className="py-1 text-5xl text-[#cfd9e1] font-bold max-[945px]:text-3xl">
                {resource_name}
              </div>
              <div className="py-1 text-4xl text-[#fc8079] font-semibold max-[945px]:text-2xl">
                {role}
              </div>
            </div>
            <div className="px-2 block">
              <button
                className="px-4 py-2 text-xl tracking-wide rounded-md bg-[#fc8079] border-2 border-transparent text-white font-semibold
              hover:bg-transparent hover:border-2 hover:border-[#fc8079] hover:font-bold hover:tracking-wide max-[945px]:text-lg"
              >
                <a href={CV} download="" target="_blank" rel="noreferrer">
                  {download_cv}
                </a>
              </button>
            </div>
          </div>
          <div className="pt-14">
            {<Linkedin /> ? <Linkedin /> : <h6>"Loading..."</h6>}
          </div>
        </div>
        <div className="h-47vh p-4 flex flex-col justify-center items-center">
          {/* <div className="py-1 text-4xl font-semibold text-center tracking-wide text-teal-300 font-Cursive italic">
            {quotation_one}
          </div>
          <div className="py-1 text-4xl font-semibold text-center tracking-wide text-teal-300 font-Cursive italic">
            {quotation_two}
          </div> */}
          <div className="grow flex items-center py-1 text-4xl font-medium text-center tracking-wide text-[#cfd9e1] font-fangsong italic max-[945px]:text-3xl max-[1200px]:text-left max-[540px]:text-2xl max-[450px]:text-xl">
            {quotation_three}
          </div>
          <div className="grow w-11/12 py-1 text-4xl font-semibold text-right tracking-wide text-[#fc8079] font-fangsong italic max-[945px]:text-3xl max-[540px]:text-2xl max-[450px]:text-lg">
            {quotation_three_sub}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
