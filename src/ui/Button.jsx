import React from "react";

function Button({ children, type, href }) {
  const base =
    "border-none text-xl text-gray-200 font-semibold bg-blue-600 rounded-full";

  const style = {
    primary: base + " py-2 px-5",
  };

  if (href)
    return (
      <a href="#contact" className={style[type]}>
        Hire me
      </a>
    );
  return <button className={style[type]}>{children}</button>;
}

export default Button;
