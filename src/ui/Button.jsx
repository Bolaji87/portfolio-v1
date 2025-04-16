import React from "react";

function Button({ children, type, href }) {
  const base =
    "border-none  text-gray-200 font-semibold bg-blue-600 rounded-full";

  const style = {
    primary: base + " py-2 px-5 text-xl",
    secondary: base + " py-3 px-6 tracking-wide ",
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
