import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const myName = "SAI KUMAR MADDALA";
  const toStyleNav = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#fc8079" : "#e4e4e7",
    };
  };
  return (
    <nav className="flex justify-between w-full pt-4 pb-2 px-10 bg-[#133B5F] bg-opacity-40 fixed border-b-2 border-white">
      <div className="p-2 rounded-lg max-lg:my-1 max-[1365px]:my-2">
        <span className="flex-none italic text-zinc-200 font-semibold tracking-wider px-5 text-xl">
          {myName}
        </span>
      </div>
      <div className="">
        <NavLink to="/get-in-touch" style={toStyleNav}>
          <li className="w-44 border-2 border-white hover:bg-slate-300 p-2 list-none rounded-lg max-lg:my-1 italic tracking-wide cursor-pointer px-6 font-bold text-lg text-white hover:text-zinc-700">
            CONTACT ME
          </li>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
