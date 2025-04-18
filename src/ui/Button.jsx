import React from "react";

function Button({ children, type, href }) {
  const base = "border-none  transition  text-gray-500 p-8 ";

  const style = {
    primary: base + " py-2 px-5 text-2xl rounded bg-gray-100 font-semibold",
    secondary: base + " py-2 px-6 tracking-wide rounded-full bg-yellow-800 ",
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
