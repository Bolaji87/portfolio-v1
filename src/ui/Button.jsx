import React from "react";

function Button({ children, type, href }) {
  const base =
    "border-none  text-gray-200 font-semibold transition bg-emerald-600 hover:bg-emerald-400  bg-gradient-to-l from-emerald-600 to-blue-600 text-white p-8 ";

  const style = {
    primary: base + " py-2 px-5 text-xl rounded-full",
    secondary: base + " py-2 px-6 tracking-wide rounded-full ",
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
