import React from "react";

function Projects() {
  return (
    <div className=" w-full min-h-screen mt-3">
      <h1 className="text-3xl text-center uppercase font-bold">Projects</h1>
      <p className="text-center italic font-medium">what i have built so far</p>

      <div className="grid grid-cols-2 gap-3 p-10 min-w-5xl ">
        <div className="bg-gray-600 h-80 aspect-[2/1] text-white shadow-lg hover:shadow-xl rounded-lg py-16 px-20">
          Fast react pizza
        </div>
        <div className="bg-gray-600 h-80 aspect-[2/1] shadow-lg hover:shadow-xl rounded-lg text-white py-16 px-20">
          The world wise app
        </div>
        <div className="bg-gray-600 h-80 aspect-[2/1] shadow-lg hover:shadow-xl rounded-lg text-white py-16 px-20">
          E commerce
        </div>
        <div className="bg-gray-600 h-80 aspect-[2/1] shadow-lg hover:shadow-xl rounded-lg text-white py-16 px-20">
          wild oasis app
        </div>
      </div>
    </div>
  );
}

export default Projects;
