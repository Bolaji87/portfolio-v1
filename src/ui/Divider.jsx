import React from "react";

function Divider() {
  return (
    <div className="flex justify-between items-center px-8 py-6 text-xl font-medium bg-slate-600">
      <div>
        <p>Projects Done</p>
        <h2 className="text-center">15+</h2>
      </div>
      <div>
        <p>Experience</p>
        <h2 className="text-center">2+</h2>
      </div>
      <div>
        <p> Clients Satisfaction</p>
        <h2 className="text-center"> 100%</h2>
      </div>
    </div>
  );
}

export default Divider;
