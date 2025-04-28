import React from "react";

function Footer() {
  return (
    <footer className="py-5 bg-gray-600 shadow-xl h-16 text-gray-200 text-center text-lg font-semibold">
      &copy; {new Date().getFullYear()} Saka Bolaji Waheed. All rights reserved
    </footer>
  );
}

export default Footer;
