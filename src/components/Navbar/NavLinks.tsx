import React, { useState } from "react";
import { Link } from "react-router-dom";
import links from "./myLinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 "
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span>
                
              </span>
            </h1>

            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
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
          {/* Mobile Menus */}
          <div
            className={`${heading === link.name ? "md:hidden " : "hidden"} `}
          >
            {/* sublinks */}
            {link.subLinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-4 font-semibold md:pr-0 pr-5"
                  >
                    {slinks.Head}
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.subLink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
