import React from "react";

function Landing() {
  return (
    <div>
      <NavBar />
    </div>
  );
}
function NavBar() {
  return (
    <div>
      <div>bolaji</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Resume</li>
        </ul>
      </nav>
      <div>toggle</div>
    </div>
  );
}

export default Landing;
