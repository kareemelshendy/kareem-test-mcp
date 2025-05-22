"use client";

import { CloseIcon, MenuIcon } from "@/components/icons";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";

export const NavbarToggleMenu = ({
  links,
}: {
  links: { title: string; path: string }[];
}) => {
  const [show, setShow] = useState(false);
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    // Set the initial hash
    const initialHash = window.location.hash;
    console.log("Initial hash:", initialHash);
    setCurrentHash(initialHash);

    // Update hash on change
    const handleHashChange = () => {
      const newHash = window.location.hash;
      console.log("Hash changed to:", newHash);
      setCurrentHash(newHash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleTogglerMenu = () => {
    setShow(!show);
  };

  const handleLinkClick = (path: string) => {
    const newHash = path;
    console.log("Link clicked, new hash:", newHash);
    setCurrentHash(newHash);
    handleTogglerMenu();
  };

  return (
    <>
      <button
        className="cursor-pointer lg:hidden text-secondary text-[16px] font-poppins font-medium flex items-center gap-2 uppercase"
        onClick={handleTogglerMenu}
      >
        Menu
       <span className="text-[24px]"> <MenuIcon /></span>
      </button>

      <div
        className={`lg:hidden fixed inset-0 h-full z-50 pointer-events-none ${
          show ? "!pointer-events-auto" : ""
        }`}
      >
        <div
          className={`absolute inset-x-0 bg-background z-10 duration-500  -translate-y-[100%] p-[32px] flex flex-col gap-[24px] ${
            show ? "!translate-y-0" : ""
          }`}
        >
          <button
            onClick={handleTogglerMenu}
            className={`cursor-pointer absolute top-[32px] right-[32px] text-secondary text-[24px]`}
          >
            {" "}
            <CloseIcon />
          </button>

          <ul className={"inline-flex flex-col gap-4"}>
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  className={`text-[16px] font-normal text-secondary relative ${
                    link.path === currentHash ? "underline" : ""
                  }`}
                  href={link.path}
                  onClick={() => handleLinkClick(link.path)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`cursor-pointer fixed inset-0 h-full bg-transparent pointer-events-none duration-300 ${
            show ? "!bg-black/50 !pointer-events-auto" : ""
          }`.trim()}
          onClick={handleTogglerMenu}
        ></div>
      </div>
    </>
  );
};
