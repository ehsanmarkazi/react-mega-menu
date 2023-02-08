import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
export const Navbar = () => {
  return (
    <nav className="bg-purple-500">
      <div className="flex items-center font-medium justify-around">
        <div>
          <img src="" alt="logo" className="md:cursor-pointer" />
        </div>
        <ul>
          <li>
            <Link to='/' className="py-7 px-3 inline-block">Home</Link>
          </li>
          <NavLinks/>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
