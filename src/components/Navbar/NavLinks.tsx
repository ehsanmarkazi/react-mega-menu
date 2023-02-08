import React from "react";

const NavLinks = () => {
  const links = [{ name: "Men" }, { name: "Women" }, { name: "Kid's" }];
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 test-left md:cursor-pointer">
            <h1 className="py-7">{link.name}</h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
