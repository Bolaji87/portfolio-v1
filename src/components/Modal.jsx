import React from "react";

function Modal() {
  return (
    <nav className="max-w-[530px] w-80 h-[380px] top-20 mt-1 rounded-md right-3 text-2xl font-semibold justify-center items-center gap-5 py-5 absolute bg-gray-300 flex flex-col">
      <a
        href="#home"
        className="text-gray-500 py-2 px-6 hover:bg-gray-700 hover:text-gray-100  hover:px-24 hover:rounded-lg hover:p-2 inline-block"
      >
        Home
      </a>
      <a
        href="#about"
        className="text-gray-500 py-2 px-6 hover:bg-gray-700 hover:text-gray-100 hover:px-24 hover:rounded-lg hover:p-2 inline-block"
      >
        About
      </a>
      <a
        href="#projects"
        className="text-gray-500 py-2 px-6 hover:bg-gray-700 hover:text-gray-100  hover:px-24 hover:rounded-lg hover:p-2 inline-block"
      >
        Projects
      </a>
      <a
        href="#skills"
        className="text-gray-500 py-2 px-6 hover:bg-gray-700 hover:text-gray-100 hover:px-24 hover:rounded-lg hover:p-2 inline-block"
      >
        Skills
      </a>
      <a
        href="#contact"
        className="text-gray-500 py-2 px-6 hover:bg-gray-700 hover:text-gray-100  hover:px-24 hover:rounded-lg hover:p-2 inline-block"
      >
        Contact
      </a>
    </nav>
  );
}

export default Modal;
