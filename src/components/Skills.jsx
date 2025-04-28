/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React from "react";

const skillSet = [
  {
    id: crypto.randomUUID(),
    skillName: "HTML",
    skillLogo: "/images/html-5.png",
  },

  {
    id: crypto.randomUUID(),
    skillName: "CSS",
    skillLogo: "/images/css-3.png",
  },

  {
    id: crypto.randomUUID(),
    skillName: "JavaScript",
    skillLogo: "/images/js.png",
  },

  {
    id: crypto.randomUUID(),
    skillName: "React",
    skillLogo: "/images/react.png",
  },
  {
    id: crypto.randomUUID(),
    skillName: "Git",
    skillLogo: "/images/git.png",
  },
  {
    id: crypto.randomUUID(),
    skillName: "Github",
    skillLogo: "/images/github.png",
  },

  {
    id: crypto.randomUUID(),
    skillName: "Tailwind CSS",
    skillLogo: "/images/tailwindcss.png",
  },
  {
    id: crypto.randomUUID(),
    skillName: "Next.js",
    skillLogo: "/images/nextjs.png",
  },
  {
    id: crypto.randomUUID(),
    skillName: "TypeScript",
    skillLogo: "/images/typescript.png",
  },
  {
    id: crypto.randomUUID(),
    skillName: "Supabase",
    skillLogo: "/images/supabase.png",
  },
  {
    id: crypto.randomUUID(),
    skillName: "Redux",
    skillLogo: "/images/redux.png",
  },
];

function Skills() {
  return (
    <section className="min-h-screen max-w-6xl pt-10 mx-auto px-8 sm:px-12 md:px-14 lg:px-24">
      <div className="text-center space-y-6  mb-3  py-10">
        <h3 className="text-2xl sm:text-3xl text-gray-800 font-bold">
          My Skills
        </h3>
        <p className="font-bold text-gray-100 text-xl">
          These are the technologies I've worked with
        </p>
      </div>
      <ul className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-4 gap-x-32  gap-y-16 px-4 py-2">
        {skillSet.map((skill) => (
          <Skill key={skill.id} skill={skill} />
        ))}
      </ul>
    </section>
  );
}

function Skill({ skill }) {
  return (
    <div>
      <li
        className="flex
        rounded-md
        w-52
        flex-col
        items-center
        gap-3
        bg-gray-500
        shadow-md
        hover:scale-110
        hover:shadow-xl
        transition-all
        duration-500
        py-10
        px-16"
      >
        <img
          className="h-20 w-20 object-cover "
          src={skill.skillLogo}
          alt={skill.skillName}
        />
        <p className="font-semibold text-md w-60 text-center text-gray-200 text-lg">
          {skill.skillName}
        </p>
      </li>
    </div>
  );
}

export default Skills;
