import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";
import myPic from "../assets/chatgpt-image.png";
import Button from "../ui/Button";

function Home() {
  return (
    <div className="flex sm:flex-row justify-center flex-col py-20 w-full px-8 sm:px-12 md:px-14 lg:px-24  sm:justify-between items-center">
      <div>
        <h1 className="text-center sm:text-left font-semibold mb-5 text-6xl text-gray-800 tracking-wide">
          <span className="">
            <span className="text-blue-600"> Saka Bolaji Waheed</span>
          </span>{" "}
          <br />
          <span className="">a React.js Developer</span>
        </h1>
        <div className="my-10 space-x-2 flex justify-center sm:justify-normal ">
          <Button href="#contact" type="secondary">
            contact
          </Button>
          <Button href="#projects" type="secondary">
            projects
          </Button>
        </div>
        <div className="flex mt-5 items-center justify-center sm:justify-normal font-semibold gap-4">
          <div className=" p-3 rounded-full bg-blue-200">
            <Github className="bg-slate-50 rounded-full text-blue-600 font-semibold text-xl" />
          </div>
          <div className=" bg-blue-200  p-3 rounded-full">
            <Twitter className="bg-slate-50 rounded-full text-blue-600 font-semibold text-xl" />
          </div>
          <div className=" bg-blue-200 p-3 rounded-full">
            <Linkedin className="bg-slate-50 rounded-full text-blue-600 font-semibold text-xl" />
          </div>
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
