import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import Button from "./Button";
export const Navbar = () => {
  return (
    <nav className="bg-purple-500">
      <div className="flex items-center font-medium justify-around">
        <div>
          <img src="" alt="logo" className="md:cursor-pointer" />
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
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <Button/>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
