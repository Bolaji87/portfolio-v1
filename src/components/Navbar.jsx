import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

import Modal from "./Modal.jsx";
import Button from "../ui/Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className="bg-inherit fixed top-0 z-50 shadow-2xl border-b border-b-gray-400  w-full">
      <div className="flex   h-16  text-gray-200 py-5 px-8 sm:px-12 md:px-14 lg:px-24 items-center justify-between ">
        <h1 className="text-3xl   font-bold  hover:text-white md:hover:text-4xl cursor-pointer hover:font-semibold md:hover:font-bold hover:transition-all  ">
          SB
        </h1>
        <nav className="md:flex gap-4 text-lg hidden ">
          <a
            href="#home"
            className="text-lg font-semibold inline-block py-2 px-4 hover:text-white hover:text-2xl hover:font-bold hover:scale-105 duration-500 hover:transition-all"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-lg font-semibold inline-block py-2 px-4 hover:text-white hover:text-2xl hover:font-bold hover:transition-all "
          >
            About
          </a>
          <a
            href="#projects"
            className="text-lg font-semibold inline-block py-2 px-4 hover:text-white hover:text-2xl hover:font-bold hover:transition-all "
          >
            Projects
          </a>

          <a
            href="#skills"
            className="text-lg font-semibold inline-block py-2 px-4 hover:text-white hover:text-2xl hover:font-bold hover:transition-all "
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-lg font-semibold inline-block py-2 px-4 hover:text-white hover:text-2xl hover:font-bold hover:transition-all "
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2 h-10">
          <Button href="#contact" type="hireMe">
            Hire me
          </Button>

          <div
            role="button"
            onClick={handleToggle}
            className="h-full md:hidden py-2  text-2xl font-semibold text-gray-100 w-auto flex items-center"
          >
            {isOpen ? (
              <FaTimes className="h-[calc(theme(fontSize.lg)*2)] w-[calc(theme(fontSize.lg)*1.5)] cursor-pointer" />
            ) : (
              <GiHamburgerMenu className="h-[calc(theme(fontSize.2xl)*2.5)] w-[calc(theme(fontSize.2xl)*2)] cursor-pointer" />
            )}
          </div>
          {isOpen && <Modal />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
