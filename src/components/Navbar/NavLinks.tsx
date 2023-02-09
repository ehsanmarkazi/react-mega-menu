import React from "react";
import { Link } from "react-router-dom";
import { links } from "./myLinks";

const NavLinks = () => {
  
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 test-left md:cursor-pointer group">
            <h1 className="py-7">{link.name}</h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:block hover:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45 "></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10">
                    {link.subLinks.map((mySubLink) => (
                      <div>
                        <h1 className="text-lg font-semibold">
                          {mySubLink.Head}
                        </h1>
                        {mySubLink.subLink.map((sLink) => (
                          <li className="text-sm text-gray-600 my-3">
                            <Link
                              to={sLink.link}
                              className="hover:text-primary"
                            >
                              {sLink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
