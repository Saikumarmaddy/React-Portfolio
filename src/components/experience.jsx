import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import tcs_image from "../assets/images/TCS.png";
import acc_image from "../assets/images/ACC.png";

function Experience() {
  const data = [
    {
      org: "Accenture",
      role: "Application Development Senior Analyst Jan'23 - Present",
      exp: "• Working in creating Functional design documents with thorough understanding of the retail domain functionalities.\n• I have been working in integrating Enactor a 3rd party tool to existing client web application by adding custom UI functionalities to the web application.\n• This work helps me in understanding the Functional side of the project, as I involve in creating FDs, Process Flows etc…\n 𝑻𝒆𝒄𝒉 𝒔𝒕𝒂𝒄𝒌 𝒊𝒏𝒄𝒍𝒖𝒅𝒆𝒅: Enactor Integration, XML creation, ReactJS, JavaScript, HTML, CSS...",
    },
    {
      org: "Accenture",
      role: "Application Development Senior Analyst Jan'22 - Dec'22",
      exp: "• Worked in developing an application where users can view and track their submitted requests.\n• This application has developed adapting latest web accessibility standards so that visually impaired and hearing-impaired users can also access the application with ease.\n𝑻𝒆𝒄𝒉 𝒔𝒕𝒂𝒄𝒌 𝒊𝒏𝒄𝒍𝒖𝒅𝒆𝒅: ReactJS, CSS/LESS, JavaScript, GIT, HTML, CSS...",
    },
    {
      org: "Accenture",
      role: "Application Development Analyst Jun'21 - Jan'22",
      exp: "• Developed a case management portal using NextJS and Stencil framework and getting it deployed into the CI CD pipeline through code commit.\n• User will be provided with a service where he can submit a form and the respective team addresses the ticket and resolves the issue.\n𝑻𝒆𝒄𝒉 𝒔𝒕𝒂𝒄𝒌 𝒊𝒏𝒄𝒍𝒖𝒅𝒆𝒅: NextJS, Tailwind CSS, JavaScript, AWS, HTML, CSS...",
    },
    {
      org: "Tata Consultancy Services (TCS)",
      role: "System Engineer Jun'20 - May'21",
      exp: "• Developed a Udemy like web application, wherein user able to buy courses for which tech stack included HTML, CSS, JavaScript, Axios, ReactJS, Tailwind, NodeJS.\n• I do have experience in Jest/React testing library to perform Unit Testing for the code developed.Performing QA for the designs and code helped me to code in an efficient way, Cypress has been used in performing QA.\n𝑻𝒆𝒄𝒉 𝒔𝒕𝒂𝒄𝒌 𝒊𝒏𝒄𝒍𝒖𝒅𝒆𝒅: ReactJS, Tailwind CSS, JavaScript, GIT, HTML, CSS...",
    },
    {
      org: "Tata Consultancy Services (TCS)",
      role: "Junior System Engineer Jan'19 - May'20",
      exp: "• Worked as a Verification and Validation Engineer in Avionics domain, wherein I supposed to develop test cases to ensure quality of the code.\n• Test cases are developed with thorough analysis and review of Low Level and High-Level Requirements.",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full px-20 h-screen font-medium text-center text-[#d19c96] font-fangsong">
      <div className="flex-col justify-center items-center w-2/5 h-2/6 px-20">
        <div className="w-full h-1/2">
          <img
            src={acc_image}
            alt="acc_image"
            className="w-3/4 h-3/5 rounded-lg"
          />
        </div>
        <div className="w-full h-1/2">
          <img
            src={tcs_image}
            alt="tcs_image"
            className="w-3/4 h-3/5 rounded-lg"
          />
        </div>
      </div>
      <div className="w-4/6">
        <Accordion
          transition={{
            duration: "300ms",
            timingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          }}
        >
          {data.map((item, index) => (
            <AccordionItem>
              {({ open }) => (
                <>
                  <AccordionHeader className="w-full flex justify-between text-[#b2bc8d] border-b p-4 font-semibold italic text-2xl">
                    <span className="flex-none">
                      <svg
                        class={`w-6 h-6 ${!open ? "" : "rotate-90"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="grow text-left">{item.org}</span>
                    <span className="flex-none text-left">{item.role}</span>
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="p-5 text-lg font-medium text-[#cfd9e1] text-left whitespace-pre">
                      {item.exp}
                    </div>
                  </AccordionBody>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Experience;
