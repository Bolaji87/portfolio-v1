import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex bg-slate-600 py-5 px-8 items-center justify-between">
      <Link className="text-2xl font-semibold italic">Bolaji</Link>
      <nav className="flex gap-4 text-lg font-medium">
        <Link>Home</Link>
        <Link>Projects</Link>
        <Link>About</Link>
        <Link>Contact</Link>
      </nav>
      <div className="bg-teal-500">
        <Link className="text-lg font-medium">Hire me</Link>
      </div>
    </div>
  );
}

export default Navbar;
