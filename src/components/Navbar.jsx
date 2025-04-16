import React from "react";

function Navbar() {
  return (
    <div className="flex bg-gray-100 text-gray-800 py-5 px-8 items-center justify-between">
      <h1 className="text-2xl font-semibold italic">Bolaji</h1>
      <nav className="flex gap-4 text-lg ">
        <a
          href="#home"
          className="text-lg font-semibold inline-block py-2 px-4 text-gray-800 hover:text-blue-500"
        >
          Home
        </a>
        <a
          href="#projects"
          className="text-lg font-semibold inline-block py-2 px-4 text-gray-800 hover:text-blue-500"
        >
          Projects
        </a>
        <a
          href="#about"
          className="text-lg font-semibold inline-block py-2 px-4 text-gray-800 hover:text-blue-500"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-lg font-semibold inline-block py-2 px-4 text-gray-800 hover:text-blue-500"
        >
          Contact
        </a>
      </nav>
      <div className="bg-blue-600 py-2 px-5 rounded-full ">
        <a href="#contact" className="text-xl text-gray-200 font-semibold">
          Hire me
        </a>
      </div>
    </div>
  );
}

export default Navbar;
