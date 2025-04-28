import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaTwitter } from "react-icons/fa6";

import myPic from "../assets/chatgpt-image.png";
import Button from "../ui/Button";

function Home() {
  return (
    <div className="flex sm:flex-row min-h-screen justify-center flex-col py-20 w-full px-8 sm:px-12 md:px-14 lg:px-24  sm:justify-between items-center">
      <div>
        <h1 className="text-center sm:text-left  mb-5  text-gray-800 tracking-wide">
          <span className="">
            <span className="text-gray-200 text-5xl font-semibold">
              {" "}
              Saka Bolaji Waheed
            </span>
          </span>{" "}
          <br />
          <span className="text-gray-800 text-3xl font-bold ">
            React.js Developer
          </span>
        </h1>
        <div className="my-10 space-x-2 flex justify-center sm:justify-normal ">
          <Button href="#contact" type="secondary">
            contact
          </Button>
          <Button href="#projects" type="secondary">
            projects
          </Button>
        </div>
        <div className="flex mt-5 items-center justify-center sm:justify-start gap-4">
          <div className="p-2 rounded-full bg-black hover:bg-gray-800 transition">
            <FaGithub className="text-white text-2xl" />
          </div>

          <div className="p-2 rounded-full bg-[#0077B5] hover:bg-[#006699] transition">
            <FaLinkedin className="text-white text-2xl" />
          </div>

          <div className="p-2 rounded-full bg-sky-500 hover:bg-sky-600 transition">
            <FaTwitter className="text-white text-2xl" />
          </div>
        </div>
      </div>

      <section className=" w-[400px] h-[400px] rounded-full">
        <img
          className="h-full w-full object-cover  p-5  rounded-full"
          src={myPic}
          alt="bolaji"
        />
      </section>
    </div>
  );
}

export default Home;
