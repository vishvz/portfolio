"use client";
import Link from "next/link";
import React, { useState } from "react";
import CloseMenuSvg from "../public/icons/close_menu.svg";
import MenuSvg from "../public/icons/menu.svg";

function SmNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <div className=" flex flex-col md:hidden ml-12">
      <button
        onClick={toggleMenu}
        type="button"
        className="w-14 h-14 flex justify-center "
      >
        {isOpen ? <CloseMenuSvg width="38px" /> : <MenuSvg width="38px" />}
      </button>

      {isOpen && (
        <nav className="block md:hidden">
          <ul className="flex flex-col gap-12">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default SmNav;
