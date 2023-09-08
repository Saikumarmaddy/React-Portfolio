import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import tcs_image from "../assets/images/TCS.png";
import acc_image from "../assets/images/ACC.png";
import CheckMark from "../assets/images/check.png";

function Experience() {
  const data = [
    {
      org: "Accenture",
      role: "Application Development Senior Analyst Jan'23 - Present",
      exp: [
        {
          exp_point_1:
            "Working in creating Functional design documents with thorough understanding of the retail domain functionalities.",
          exp_point_2:
            "I have been working in integrating Enactor a 3rd party tool to existing client web application by adding custom UI functionalities to the web application.",
          exp_point_3:
            "This work helps me in understanding the Functional side of the project, as I involve in creating FDs, Process Flows etc…",
          exp_point_4:
            "𝑻𝒆𝒄𝒉 𝒔𝒕𝒂𝒄𝒌 𝒊𝒏𝒄𝒍𝒖𝒅𝒆𝒅: Enactor Integration, XML creation, ReactJS, JavaScript, HTML, CSS...",
        },
      ],
      platform: "Integrating Enactor with Retail(POS) platform",
      period: "Jan'23 - Present",
    },
    {
      org: "Accenture",
      role: "Application Development Senior Analyst Jan'22 - Dec'22",
      exp: [
        {
          exp_point_1:
            "Worked in developing an application where users can view and track their submitted requests.",
          exp_point_2:
            "This application has developed adapting latest web accessibility standards so that visually impaired users also be able to access the application with ease.",
          exp_point_3:
            "𝑻𝒆𝒄𝒉 𝒔𝒕𝒂𝒄𝒌 𝒊𝒏𝒄𝒍𝒖𝒅𝒆𝒅: ReactJS, CSS/LESS, JavaScript, GIT, HTML, CSS...",
        },
      ],
      platform: "Online Retirement funds platform",
      period: "Jan'22 - Dec'22",
    },
    {
      org: "Accenture",
      role: "Application Development Analyst Jun'21 - Jan'22",
      exp: [
        {
          exp_point_1:
            "Developed a case management portal using NextJS and Stencil framework and getting it deployed into the CI CD pipeline through code commit.",
          exp_point_2:
            "User will be provided with a service where he can submit a form and the respective team addresses the ticket and resolves the issue.",
          exp_point_3:
            "𝑻𝒆𝒄𝒉 𝒔𝒕𝒂𝒄𝒌 𝒊𝒏𝒄𝒍𝒖𝒅𝒆𝒅: NextJS, Tailwind CSS, JavaScript, AWS, HTML, CSS...",
        },
      ],
      platform: "Case Management Portal",
      period: "Jun'21 - Jan'22",
    },
    {
      org: "Tata Consultancy Services (TCS)",
      role: "System Engineer Jun'20 - May'21",
      exp: [
        {
          exp_point_1:
            "Developed a Udemy like web application, wherein user able to buy courses for which tech stack included HTML, CSS, JavaScript, Axios, ReactJS, Tailwind, NodeJS.",
          exp_point_2:
            "I do have experience in Jest/React testing library to perform Unit Testing for the code developed.Performing QA for the designs and code helped me to code in an efficient way, Cypress has been used in performing QA.",
          exp_point_3:
            "𝑻𝒆𝒄𝒉 𝒔𝒕𝒂𝒄𝒌 𝒊𝒏𝒄𝒍𝒖𝒅𝒆𝒅: ReactJS, Tailwind CSS, JavaScript, GIT, HTML, CSS...",
        },
      ],
      platform: "Online Learning Platform",
      period: "Jun'20 - May'21",
    },
    {
      org: "Tata Consultancy Services (TCS)",
      role: "Junior System Engineer Jan'19 - May'20",
      exp: [
        {
          exp_point_1:
            "Worked as a Verification and Validation Engineer in Avionics domain, wherein I supposed to develop test cases to ensure quality of the code.",
          exp_point_2:
            "Test cases are developed with thorough analysis and review of Low Level and High-Level Requirements.",
        },
      ],
      platform: "Verification and Validation Engineer",
      period: "Jan'19 - May'20",
    },
  ];
  const notables = [
    {
      notable:
        "Received 'Client Value Creation' award for the continuous focus towards Automation.",
    },
    {
      notable:
        "Received 'Championing Equality' award for the efforts I have put in delivering the tasks.",
    },
    {
      notable:
        "Received 'Respect for the Individual' award for seamlessly managing the work with activities, deliverables.",
    },
  ];
  return (
    <div className="w-full px-20 h-full ">
      <div className="flex justify-between items-start font-medium text-center text-[#d19c96] font-fangsong max-[1010px]:flex-col max-[1010px]:justify-stretch max-[1010px]:pt-44 max-[730px]:px-6">
        <div className="min-[1010px]:flex-col justify-center items-center w-2/5 h-2/6 px-20 flex max-[1010px]:w-4/5 max-[1010px]:4/6 max-[730px]:px-0">
          <div className="w-full h-1/2">
            <img
              src={acc_image}
              alt="acc_image"
              className="w-3/4 h-3/5 rounded-lg max-[450px]:w-4/5"
            />
          </div>
          <div className="w-full h-1/2">
            <img
              src={tcs_image}
              alt="tcs_image"
              className="w-3/4 h-3/5 rounded-lg max-[450px]:w-4/5"
            />
          </div>
        </div>
        <div className="w-4/6 max-[1010px]:w-full">
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
                    <AccordionHeader className="w-full flex text-[#b2bc8d] border-b p-4 font-semibold italic text-2xl cursor-pointer max-[1010px]:text-lg max-[450px]:text-base max-[1010px]:justify-between">
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
                      {/* <span className="grow text-left">{item.org}</span>
                    <span className="flex-none text-left">{item.role}</span> */}
                      <span className="grow text-left">{item.platform}</span>
                      <span className="flex-none text-left">{item.period}</span>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="p-5 text-lg font-medium text-[#cfd9e1] text-left">
                        {item.exp.map((expPoint) => (
                          <>
                            {expPoint.exp_point_1 && (
                              <li>{expPoint.exp_point_1}</li>
                            )}
                            {expPoint.exp_point_2 && (
                              <li>{expPoint.exp_point_2}</li>
                            )}
                            {expPoint.exp_point_3 && (
                              <li>{expPoint.exp_point_3}</li>
                            )}
                            {expPoint.exp_point_4 && (
                              <li>{expPoint.exp_point_4}</li>
                            )}
                          </>
                        ))}
                      </div>
                    </AccordionBody>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="my-28 py-10 text-2xl font-medium text-left tracking-wide text-[#cfd9e1] font-fangsong italic max-[1010px]:w-full max-[1010px]:text-left max-[450px]:text-xl bg-[#54B4D3] bg-opacity-25 bg-gradient-to-l from-black rounded-lg">
        <span class="p-10 bg-clip-text text-transparent bg-gradient-to-r from-[#54B4D3] to-[#14A44D] text-3xl font-semibold italic tracking-wider">
          ACHIEVEMENTS
        </span>
        {notables.map((notable) => (
          <div className="flex items-start my-4">
            <span className="">
              <img src={CheckMark} alt="checkmark_icon" className="mx-3 mt-1" />
            </span>
            <span>{notable.notable}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
