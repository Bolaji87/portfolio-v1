import React from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScrollUp}
      className="fixed bottom-6 right-6 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:text-gray-800 hover:bg-gray-400 transition"
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTop;
