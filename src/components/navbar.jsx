import React, { useState } from "react";
import BREADCRUMB from "../assets/images/breadcrumb.png";
import Cancel from "../assets/images/cross-mark.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [breadcrumbActive, setBreadcrumbActive] = useState(false);
  const myName = "SAI KUMAR MADDALA";
  const toStyleNav = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#fc8079" : "#e4e4e7",
    };
  };

  const handleBreadcrumb = () => {
    setBreadcrumbActive(true);
  };
  const cancelBreadcrumb = () => {
    setBreadcrumbActive(false);
  };
  return (
    <>
      <nav className="w-full py-5 px-10 bg-[#133B5F] bg-opacity-40 fixed text-white">
        <div className="max-[1365px]:flex justify-between items-center text-red">
          <div>
            <div
              className="text-xl flex justify-between max-[1365px]:flex-col"
              style={{ "font-size": "18px" }}
            >
              <div className="bg-zinc-800 p-2 rounded-lg w-90 max-lg:my-1 max-[1365px]:my-2">
                <span className="flex-none italic text-zinc-200 font-semibold tracking-wider pl-6 text-xl">
                  {myName}
                </span>
              </div>
              {/* max-[1365px]:hidden */}
              {/* style={{ "font-size": "9px" }} */}
              <div
                className={`${
                  !breadcrumbActive
                    ? "list-none bg-zinc-800 p-2 rounded-lg max-lg:my-1 max-[1365px]:hidden"
                    : "list-none w-full absolute z-50 top-24 bg-[#133B5F] bg-opacity-80 p-2 rounded-lg max-lg:my-1"
                }`}
              >
                <div
                  className={`${
                    !breadcrumbActive
                      ? "flex items-center justify-around italic text-zinc-200 font-semibold tracking-wide max-[1365px]:hidden"
                      : "flex max-[1365px]:flex-col max-[1365px]:items-end max-[1365px]:justify-around max-[1365px]:italic max-[1365px]:text-zinc-200 max-[1365px]:font-semibold max-[1365px]:tracking-wide max-[1365px]:pr-20"
                  }`}
                >
                  <NavLink
                    to="/React-Portfolio"
                    style={toStyleNav}
                    onClick={() => setBreadcrumbActive(false)}
                  >
                    <li className="hover:text-[#fc8079] cursor-pointer px-2">
                      Home
                    </li>
                  </NavLink>
                  <NavLink
                    to="/about"
                    style={toStyleNav}
                    onClick={() => setBreadcrumbActive(false)}
                  >
                    <li className="hover:text-[#fc8079] cursor-pointer px-2">
                      About
                    </li>
                  </NavLink>
                  <NavLink
                    to="/skills"
                    style={toStyleNav}
                    onClick={() => setBreadcrumbActive(false)}
                  >
                    <li className="hover:text-[#fc8079] cursor-pointer px-2">
                      Skills
                    </li>
                  </NavLink>
                  <NavLink
                    to="/experience"
                    style={toStyleNav}
                    onClick={() => setBreadcrumbActive(false)}
                  >
                    <li className="hover:text-[#fc8079] cursor-pointer px-2">
                      Experience
                    </li>
                  </NavLink>
                  <NavLink
                    to="/responsibilities"
                    style={toStyleNav}
                    onClick={() => setBreadcrumbActive(false)}
                  >
                    <li className="hover:text-[#fc8079] cursor-pointer px-2">
                      Responsibilities
                    </li>
                  </NavLink>
                  <NavLink
                    to="/get-in-touch"
                    style={toStyleNav}
                    onClick={() => setBreadcrumbActive(false)}
                  >
                    <li className="hover:text-[#fc8079] cursor-pointer px-2">
                      Contact
                    </li>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          {!breadcrumbActive ? (
            <div
              className="bg-zinc-800 p-2 mb-10 rounded-lg h-12 cursor-pointer min-[1365px]:hidden max-[1365px]:mb-1"
              onClick={() => handleBreadcrumb()}
            >
              <img src={BREADCRUMB} alt="breadcrumb_icon" />
            </div>
          ) : (
            <div
              className="bg-zinc-800 p-2 rounded-lg h-12 cursor-pointer min-[1365px]:hidden max-[1365px]:mb-1"
              onClick={() => cancelBreadcrumb()}
            >
              <img src={Cancel} className="fill-blue-500" alt="cancel_icon" />
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
