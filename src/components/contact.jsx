import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
// import GMAIL_ICON from "../assets/images/icons8-email-open-32.png";
// import PHN_ICON from "../assets/images/icons8-phonecall-cute-color-32.png";

function Contact() {
  const form = useRef();
  const [user_name, setUser_Name] = useState("");
  const [user_email, setUser_Email] = useState("");
  const [user_mobile, setUser_Mobile] = useState("");
  const [user_subject, setUser_Subject] = useState("");
  const [user_message, setUser_Message] = useState("");
  // const [banner, setBanner] = useState(false);

  // const emailId = "sai.kumar.maddala@accenture.com";
  // const contactNo = "+91 9989028355";
  // const contactText = "Reach out to me at ->";

  const handleName = (e) => {
    setUser_Name(e.target.value);
  };
  const handleEmail = (e) => {
    setUser_Email(e.target.value);
  };
  const handleMobile = (e) => {
    setUser_Mobile(e.target.value);
  };
  const handleSubject = (e) => {
    setUser_Subject(e.target.value);
  };
  const handleMessage = (e) => {
    setUser_Message(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_u9l1szf",
        "template_10o2aw6",
        form.current,
        "3HQjjQ5nV7-YrIomt"
      )
      .then(
        (result) => {
          // setBanner(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setUser_Name("");
    setUser_Email("");
    setUser_Mobile("");
    setUser_Subject("");
    setUser_Message("");
  };
  return (
    <div>
      {/* <div className="bg-zinc-800 p-2 rounded-lg w-450px max-lg:my-1 max-[1365px]:my-2 max-[800px]:hidden">
        <img src={GMAIL_ICON} alt="gmail_icon" className="inline px-2" />
        <span className="flex-none italic text-zinc-200 font-semibold tracking-wider">
          {emailId}
        </span>
      </div> */}
      <form
        className="flex flex-col justify-start items-center px-20 pb-20 w-full h-full max-[490px]:px-10 max-[400px]:px-4"
        ref={form}
        onSubmit={sendEmail}
      >
        {/* <div className="flex justify-between w-full">
          <div className="grow bg-zinc-800 p-2 text-center mr-14 rounded-lg max-lg:my-1 max-[1365px]:my-2 max-[800px]:hidden">
            <span className="italic text-zinc-200 font-semibold tracking-wider">
              {contactText}
            </span>
          </div>
          <div className="flex-none bg-zinc-800 p-2 rounded-lg w-96 mr-2 max-lg:my-1 max-[1365px]:my-2 max-[800px]:hidden">
            <img src={GMAIL_ICON} alt="gmail_icon" className="inline px-2" />
            <span className="italic text-zinc-200 font-semibold tracking-wider">
              {emailId}
            </span>
          </div>
          <div className="flex-none w-320px bg-zinc-800 p-2 rounded-lg max-lg:my-1 max-[1365px]:my-2 max-[480px]:w-56">
            <img src={PHN_ICON} alt="phone_icon" className="inline px-2" />
            <span className="italic text-zinc-200 font-semibold tracking-widest px-6 max-[480px]:text-lg max-[480px]:p-0">
              {contactNo}
            </span>
          </div>
        </div> */}
        {/* <div class="w-1/2 m-12 space-y-6">
          <div
            class="bg-green-100 border-t border-b rounded-lg border-green-500 text-green-700 px-4 py-3"
            role="alert"
          >
            <p class="font-bold">SUCCESS</p>
            <p class="text-base">Form has been submitted successfully!</p>
          </div>
        </div> */}
        <div className="flex w-full justify-center items-center max-[700px]:flex-col max-[700px]:items-start max-[700px]:justify-start max-[1100px]:justify-around">
          <label
            htmlFor="user_name"
            className="w-32 text-2xl font-semibold tracking-wide text-[#cfd9e1] font-fangsong text-left max-[700px]:p-2 max-[540px]:text-xl"
          >
            Name:
          </label>
          <input
            type="text"
            name="user_name"
            value={user_name}
            className="w-1/3 p-2 m-4 rounded-md outline-none max-[700px]:m-2 max-[700px]:w-10/12 max-[1100px]:w-8/12 "
            placeholder="Enter your name..."
            onChange={(e) => handleName(e)}
          />
        </div>
        <div className="flex w-full justify-center items-center max-[700px]:flex-col max-[700px]:items-start max-[700px]:justify-start max-[1100px]:justify-around">
          <label
            htmlFor="user_email"
            className="w-32 text-2xl font-semibold tracking-wide text-[#cfd9e1] font-fangsong text-left max-[700px]:p-2 max-[540px]:text-xl"
          >
            Email:
          </label>
          <input
            type="email"
            name="user_email"
            value={user_email}
            className="w-1/3 p-2 m-4 rounded-md outline-none max-[700px]:m-2 max-[700px]:w-10/12 max-[1100px]:w-8/12 "
            placeholder="Enter your email..."
            onChange={(e) => handleEmail(e)}
          />
        </div>
        <div className="flex w-full justify-center items-center max-[700px]:flex-col max-[700px]:items-start max-[700px]:justify-start max-[1100px]:justify-around">
          <label
            htmlFor="user_mobile"
            className="w-32 text-2xl font-semibold tracking-wide text-[#cfd9e1] font-fangsong text-left max-[700px]:p-2 max-[540px]:text-xl"
          >
            Mobile:
          </label>
          <input
            type="tel"
            name="user_mobile"
            value={user_mobile}
            className="w-1/3 p-2 m-4 rounded-md outline-none max-[700px]:m-2 max-[700px]:w-10/12 max-[1100px]:w-8/12 "
            placeholder="Enter your mobile no..."
            onChange={(e) => handleMobile(e)}
          />
        </div>
        <div className="flex w-full justify-center items-center max-[700px]:flex-col max-[700px]:items-start max-[700px]:justify-start max-[1100px]:justify-around">
          <label
            className="w-32 text-2xl font-semibold tracking-wide text-[#cfd9e1] font-fangsong text-left max-[700px]:p-2 max-[540px]:text-xl"
            htmlFor="user_subject"
          >
            Subject:
          </label>
          <input
            type="text"
            name="user_subject"
            value={user_subject}
            className="w-1/3 p-2 m-4 rounded-md outline-none max-[700px]:m-2 max-[700px]:w-10/12 max-[1100px]:w-8/12 "
            placeholder="Enter your subject..."
            onChange={(e) => handleSubject(e)}
          />
        </div>
        <div className="flex w-full justify-center items-center max-[700px]:flex-col max-[700px]:items-start max-[700px]:justify-start max-[1100px]:justify-around">
          <label
            htmlFor="user_message"
            className="w-32 text-2xl font-semibold tracking-wide text-[#cfd9e1] font-fangsong text-left max-[700px]:p-2 max-[540px]:text-xl"
          >
            Message:
          </label>
          <textarea
            name="message"
            className="w-1/3 h-28 p-2 m-4 rounded-md outline-none max-[700px]:m-2 max-[700px]:w-10/12 max-[1100px]:w-8/12 "
            placeholder="Enter your message..."
            value={user_message}
            onChange={(e) => handleMessage(e)}
          />
        </div>
        <button
          type="submit"
          value="Submit"
          className="w-1/6 px-4 py-2 mt-4 text-2xl tracking-wide rounded-md border-2 border-transparent bg-[#fc8079] text-white font-semibold
                hover:bg-transparent hover:border-2 hover:border-[#fc8079] hover:font-bold hover:tracking-wide max-[944px]:w-1/5 max-[700px]:w-2/5 max-[540px]:w-4/6"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
