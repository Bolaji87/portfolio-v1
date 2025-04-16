import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";
import myPic from "../assets/chatgpt-image.png";

function Home() {
  return (
    <div className="flex py-20 w-full px-8  justify-between  items-center">
      <div>
        <h1 className="capitalize font-semibold text-6xl ">
          <span className="mb-6">Hi, I'm Bolaji</span> <br />
          <span className="mt-12">a react.js developer</span>
        </h1>
        <div className="mt-5 mb-9">
          <button>contact</button>
          <button>projects</button>
        </div>
        <div className="flex mt-5 items-center font-semibold gap-4">
          <Github />
          <Twitter />
          <Linkedin />
        </div>
      </div>

      <section className=" w-[400px] h-[420px]">
        <img
          className="h-full w-full object-fill  p-5  rounded-full"
          src={myPic}
          alt="bolaji"
        />
      </section>
    </div>
  );
}

export default Home;
