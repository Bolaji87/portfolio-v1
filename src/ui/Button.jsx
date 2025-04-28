import React from "react";

function Button({ children, type, href }) {
  const base = "border-none  transition  text-gray-800 p-8 ";

  const style = {
    primary: base + " py-2 px-5 text-2xl rounded bg-gray-100 font-semibold",
    hireMe:
      "py-2 sm:py-4  px-6 hidden sm:inline-flex items-center  text-2xl h-full font-bold rounded bg-gray-100 border-none transition text-gray-500",
    secondary:
      base +
      " py-2 px-6  text-2xl flex items-center capitalize font-semibold tracking-wide rounded-full bg-gray-300 ",
    submit: base + " py-2 px-6 tracking-wide rounded",
  };

  if (href === "#contact")
    return (
      <a href="#contact" className={style[type]}>
        {children}
      </a>
    );

  if (href === "#projects")
    return (
      <a href="#projects" className={style[type]}>
        {children}
      </a>
    );

  return <button className={style[type]}>{children}</button>;
}

export default Button;
