import React from "react";
import GMAIL_ICON from "../assets/images/icons8-email-open-32.png";
import PHN_ICON from "../assets/images/icons8-phonecall-cute-color-32.png";
import BREADCRUMB from "../assets/images/breadcrumb.png";
import { NavLink } from "react-router-dom";
// import NavbarMobile from "./navbar_mobile";

function Navbar() {
  const contactNo = "+91 9989028355";
  const emailId = "sai.kumar.maddala@accenture.com";
  const toStyleNav = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#fc8079" : "#e4e4e7",
    };
  };
  return (
    <>
      <nav className="w-full py-5 px-10 bg-[#133B5F] bg-opacity-40 fixed text-white">
        <div className="max-[1365px]:flex justify-between items-center text-red">
          <div>
            <div className="text-xl flex justify-around max-[1365px]:flex-col">
              <div className="bg-zinc-800 p-2 rounded-lg w-450px max-lg:my-1 max-[1365px]:my-2 max-[800px]:hidden">
                <img
                  src={GMAIL_ICON}
                  alt="gmail_icon"
                  className="inline px-2"
                />
                <span className="flex-none italic text-zinc-200 font-semibold tracking-wider">
                  {emailId}
                </span>
              </div>
              {/* max-[1365px]:hidden */}
              <div
                className="list-none bg-zinc-800 p-2 rounded-lg max-lg:my-1"
                style={{ "font-size": "9px" }}
              >
                <div className="items-center flex justify-around italic text-zinc-200 font-semibold tracking-wide">
                  <NavLink to="/React-Portfolio" style={toStyleNav}>
                    <li className="hover:text-[#fc8079] cursor-pointer px-2">
                      Home
                    </li>
                  </NavLink>
                  <NavLink to="/about" style={toStyleNav}>
                    <li className="hover:text-[#fc8079] cursor-pointer px-2">
                      About
                    </li>
                  </NavLink>
                  <NavLink to="/skills" style={toStyleNav}>
                    <li className="hover:text-[#fc8079] cursor-pointer px-2">
                      Skills
                    </li>
                  </NavLink>
                  <NavLink to="/experience" style={toStyleNav}>
                    <li className="hover:text-[#fc8079] cursor-pointer px-2">
                      Experience
                    </li>
                  </NavLink>
                  <NavLink to="/responsibilities" style={toStyleNav}>
                    <li className="hover:text-[#fc8079] cursor-pointer px-2">
                      Responsibilities
                    </li>
                  </NavLink>
                  <NavLink to="/get-in-touch" style={toStyleNav}>
                    <li className="hover:text-[#fc8079] cursor-pointer px-2">
                      Contact
                    </li>
                  </NavLink>
                </div>
              </div>
              <div className="w-320px bg-zinc-800 p-2 rounded-lg max-lg:my-1 max-[1365px]:my-2 max-[480px]:w-56">
                <img src={PHN_ICON} alt="phone_icon" className="inline px-2" />
                <span className="flex-none italic text-zinc-200 font-semibold tracking-widest px-6 max-[480px]:text-lg max-[480px]:p-0">
                  {contactNo}
                </span>
              </div>
              {/* <div className="bg-zinc-800 p-2 rounded-lg cursor-pointer max-[1365px]:hidden min-[930px]:hidden">
                <img src={BREADCRUMB} alt="breadcrumb_icon" />
              </div> */}
            </div>
          </div>
          <div className="bg-zinc-800 p-2 mb-10 rounded-lg h-12 cursor-pointer min-[1365px]:hidden max-[800px]:mb-1">
            <img src={BREADCRUMB} alt="breadcrumb_icon" />
          </div>
        </div>
        {/* <NavbarMobile /> */}
      </nav>
    </>
  );
}

export default Navbar;
