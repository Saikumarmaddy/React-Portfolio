import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const myName = "SAI KUMAR MADDALA";
  const contactMe = "CONTACT ME";
  const toStyleNav = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#fc8079" : "#e4e4e7",
    };
  };
  return (
    <nav className="flex justify-between w-full pt-4 pb-2 px-10 fixed bg-blue-300 bg-opacity-20 bg-gradient-to-tl from-black max-[565px]:px-2">
      <div className="p-2 rounded-lg max-lg:my-1 max-[1365px]:my-2">
        <span className="flex-none italic text-zinc-200 font-semibold tracking-wider px-5 text-xl max-[565px]:text-lg max-[455px]:text-base">
          {myName}
        </span>
      </div>
      <div className="">
        <NavLink to="/get-in-touch" style={toStyleNav}>
          <li className="w-44 border-2 border-white hover:bg-slate-300 p-2 list-none rounded-lg max-lg:my-1 italic tracking-wide cursor-pointer px-6 font-bold text-lg text-white hover:text-zinc-700 hover:border-slate-300 max-[565px]:text-base max-[565px]:w-40">
            {contactMe}
          </li>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
