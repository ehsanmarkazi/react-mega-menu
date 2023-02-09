import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import Button from "./Button";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-purple-500">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src="" alt="logo" className="md:cursor-pointer h-9" />
          <div className="text-3xl md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
            <span className="material-symbols-outlined">{`${
              open ? "close" : "menu"
            }`}</span>
          </div>
        </div>
        <ul className="md:flex hidden  uppercase items-center gap-8 font-medium">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <Button></Button>
        </div>
        {/* Mobile Nav */}
        <ul
          className={`
            md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4
            duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
