import React from "react";
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Next.js",
  "TypeScript",
];

function Skills() {
  return (
    <section>
      <h3 className="text-2xl font-semibold mb-4 text-gray-800 items-start px-8 sm:px-12 md:px-14 lg:px-24 ">
        My Skills
      </h3>
      <div className="min-h-screen flex items-center justify-center flex-col">
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-gradient-to-r from-blue-600 to-yellow-600 text-white px-4 py-2 rounded-full font-semibold text-sm  hover:text-white p-8  transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
