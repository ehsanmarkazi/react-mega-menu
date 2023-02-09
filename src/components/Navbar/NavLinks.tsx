import React from "react";

const NavLinks = () => {
  const links = [
    {
      name: "Men",
      submenu: true,
      subLinks: [
        {
          Head: "Topwear",
          subLink: [
            { name: "T-shirt", link: "/" },
            { name: "Casual shirt", link: "/" },
            { name: "Formal shirt", link: "/" },
            { name: "Formal shirt", link: "/" },
            { name: "Formal shirt", link: "/" },
          ],
        },
      ],
    },
    { name: "Women" },
    { name: "Kid's" },
  ];
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 test-left md:cursor-pointer">
            <h1 className="py-7">{link.name}</h1>
            {link.submenu && (
              <div>
                <div>
                  <div>
                    {link.subLinks.map((mySubLink) => (
                      <div>
                        <h1>{mySubLink.Head}</h1>
                        {mySubLink.subLink.map(sLink=>(
                          <li>{sLink.name}</li>
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
